"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/constants/scale";
import FiltersIcon from "../svg/filtersIcon";
import CloseIcon from "../svg/closeIcon";
import SearchedProducts from "./SearchedProducts";
import { useRouter } from "next/navigation";
import { getQueryParamsValue } from "@/helpers/getQueryParamsValue";
import { UrlParams } from "@/app/[locale]/(site)/products/page";
import { Session } from "@/types/session";

interface Category {
  id: number;
  name: string;
  products_count: number;
  children: Category[];
};

interface Brand {
  id: number;
  name: string;
};

interface Props {
  tUpperFilters: any;
  tSideFilters: any;
  tProduct: any;
  lang: string;
  session: Session | null;
  // --
  searchedData: any;
  searchFilters: any;
  searchParams: UrlParams;
};

interface Selected {
  name: string;
  key: string;
  id: number;
};

const FiltersWrapper: React.FC<Props> = ({
  tUpperFilters,
  tSideFilters,
  tProduct,
  searchFilters,
  searchedData,
  searchParams,
  lang,
  session
}: Props) => {
  const [initialized, setInitialized] = useState<boolean>(false);

  const [selectedNames, setSelectedNames] = useState<Selected[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<string>("");

  const [isMobileFilers, setIsMobileFilers] = useState<boolean>(false);
  const [checkedArr, setCheckedArr] = useState<number[]>([]);


  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const [isCategory, setIsCategory] = useState<boolean>(true);
  const [isBrand, setIsBrand] = useState<boolean>(true);
  const [isPrice, setIsPrice] = useState<boolean>(true);
  const { category, brand, price, apply, to, see_all } = tSideFilters;

  const [brandCount, setBrandCount] = useState<number>(4);
  const [selections, setSelections] = useState<string[]>([]);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // SIDE MENU POSITIONING
  const [position, setPosition] = useState<'fixed' | 'relative'>('relative')
  const [top, setTop] = useState<number | null>(null);
  const [bottom, setBottom] = useState<number | null>(null);

  const {
    showing_the_results_for,
    sort_by,
    clear_all_filters,
    new_arrivals,
    lowest_price,
    highest_price,
    most_relevant,
    clearFilter
  } = tUpperFilters;

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate the distance between the top of the viewport and the footer
      const distanceToFooter = document.body.clientHeight - (scrollY + windowHeight);

      if (scrollY >= HEADER_HEIGHT + 10 && distanceToFooter > FOOTER_HEIGHT) {
        setPosition('fixed');
        setTop(0);
        setBottom(null);
      } else if (distanceToFooter < FOOTER_HEIGHT) {
        setPosition('fixed');
        setTop(null);
        setBottom(FOOTER_HEIGHT + 10);
      } else {
        setPosition('relative');
        setTop(null);
        setBottom(null);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!initialized) {
      handleInitialUrlCategories();
      setInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized])

  const router = useRouter();
  let queryParams;

  const handleSelected = (name: string, key: string, id: number) => {
    if (typeof window !== "undefined") {
      let selectedKeysArr = selectedNames.map(selected => selected.key);
      if (selectedKeysArr.includes(key)) {
        let filteredSelected = selectedNames.filter(
          selected => selected.key !== key
        );
        let filteredCheckedArr = checkedArr.filter(
          checked => checked !== id
        );
        setSelectedNames([...filteredSelected]);
        setCheckedArr([...filteredCheckedArr])
      } else {
        setSelectedNames([...selectedNames, { name, key, id }]);
        setCheckedArr([...checkedArr, id])
      }
      toggleCheckBox(key);
    }
  };

  const handleInitialUrlCategories = () => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      if (queryParams && queryParams.has("selections")) {
        let selectionsValue = queryParams.get("selections");
        if (selectionsValue) {
          selectionsValue = decodeURIComponent(selectionsValue);
          selectionsValue = selectionsValue.replace(/%2C/g, ",");
        }
        const categoriesAndBrands = selectionsValue
          ? selectionsValue.split(",")
          : [];

        if (categoriesAndBrands && categoriesAndBrands.length > 0) {
          let selected: Selected[] = [];
          for (let index = 0; index < categoriesAndBrands.length; index++) {
            const selection = categoriesAndBrands[index];
            let stripedSelection = selection.split('-')
            if (stripedSelection.length >= 2) {
              let selectedObj: Selected = {
                name: stripedSelection[1],
                key: selection,
                id: Number(stripedSelection[0])
              }
              selected.push(selectedObj)
            };
          }
          setSelectedNames([...selected]);
        }
      } else {
        setSelectedNames([]);
      }
    }
  };

  const toggleCheckBox = (queryKey: string) => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      let stringSelections = "";

      if (queryParams && queryParams.has("selections")) {
        let selectionsValue = queryParams.get("selections");
        if (selectionsValue) {
          selectionsValue = decodeURIComponent(selectionsValue);
          selectionsValue = selectionsValue.replace(/%2C/g, ",");
        }
        const categoriesAndBrands = selectionsValue
          ? selectionsValue.split(",")
          : [];
        const index = categoriesAndBrands.findIndex(item =>
          item.includes(queryKey)
        );

        if (index !== -1) {
          // Item found, remove it from selections
          const updatedSelections = selections.filter(s => s !== queryKey);
          setSelections([...updatedSelections]);
          categoriesAndBrands.splice(index, 1);
        } else {
          // Item not found, add it to selections
          setSelections([...selections, queryKey]);
          categoriesAndBrands.push(queryKey);
        }

        const filteringValue = categoriesAndBrands.join(",");
        // queryParams.set("selections", filteringValue);
        stringSelections = filteringValue;
      } else {
        // No existing selections, set the current item as the only selection
        setSelections([queryKey]);
        // queryParams.set("selections", queryKey);
        stringSelections = queryKey;
      }

      let defaultParams = `search=${queryParams.get(
        "search"
      ) || ''}&page=${queryParams.get("page") || ''}&per_page=${queryParams.get(
        "per_page"
      ) || ''}&orderBy=${queryParams.get("orderBy") || ''}&orderType=${queryParams.get(
        "orderType"
      ) || ''}&price_from=${queryParams.get("price_from") || ''}&price_to=${queryParams.get(
        "price_to"
      ) || ''}&selections=${stringSelections}`;


      const path = window.location.pathname + "?" + defaultParams.toString();
      router.push(path);
    }
  };

  const handlePriceChange = (min: string, max: string) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      queryParams = getQueryParamsValue(queryParams, "price_from", min);
      queryParams = getQueryParamsValue(queryParams, "price_to", max);
      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  };

  const handleClearAllSelections = () => {
    if (typeof window !== "undefined") {
      setSelectedNames([]);
      setCheckedArr([])
      queryParams = new URLSearchParams(window.location.search);
      queryParams.set("search", "");
      queryParams.set("page", "1");
      queryParams.set("per_page", "12");
      queryParams.set("orderBy", "");
      queryParams.set("orderType", "");
      queryParams.set("price_from", "");
      queryParams.set("price_to", "");
      queryParams.set("selections", "");
      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      let selectValue = event.target.value;
      let selectedValue = "";
      let selectedTerm = "";
      if (selectValue === "highest_price") {
        selectedTerm = "price";
        selectedValue = "desc";
      } else if (selectValue === "lowest_price") {
        selectedTerm = "price";
        selectedValue = "asc";
      } else if (selectValue === "new_arrivals") {
        selectedTerm = "created_at";
        selectedValue = "desc";
      } else if (selectValue === "most_relevant") {
        selectedTerm = "id";
        selectedValue = "desc";
      }
      setSelectedSortOption(selectValue);
      queryParams = getQueryParamsValue(queryParams, "orderBy", selectedTerm);
      queryParams = getQueryParamsValue(
        queryParams,
        "orderType",
        selectedValue
      );

      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  };

  const toggleChildCategories = (categoryId: any) => {
    setExpandedCategories((prevExpandedCategories) => {
      const isCategoryExpanded = prevExpandedCategories.includes(categoryId);

      if (isCategoryExpanded) {
        const updatedCategories = prevExpandedCategories.filter(
          (id) =>
            id !== categoryId &&
            !searchFilters.categories
              .find((cat: Category) => cat.id === id)
              ?.children.some((child: Category) =>
                prevExpandedCategories.includes(child.id)
              )
        );
        return updatedCategories;
      } else {
        const updatedCategories = [...prevExpandedCategories, categoryId];
        const childCategoryIds = searchFilters.categories
          .find((cat: Category) => cat.id === categoryId)
          ?.children.map((child: Category) => child.id);

        if (childCategoryIds) {
          updatedCategories.push(...childCategoryIds);
        }
        return [...prevExpandedCategories, categoryId];;
      }
    });
  };

  const checkIfExistsInQueryParams = (
    queryParams: any,
    value: string
  ) => {
    if (queryParams && queryParams.has("selections")) {
      let selectionsValue = queryParams.get("selections");
      selectionsValue = decodeURIComponent(selectionsValue);
      selectionsValue = selectionsValue.replace(/%2C/g, ",");
      selectionsValue = selectionsValue.split(",");
      return selectionsValue.includes(value);
    } else {
      return false;
    }
  };

  const checkHandler = (checkBoxValue: string, checkBoxType: string) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      return checkIfExistsInQueryParams(queryParams, `${checkBoxValue}-${checkBoxType}`)
    }
  };

  let desktopCssStyles: CSSProperties = {
    position: position,
    width: '16vw',
    maxHeight: '939px',
    marginTop: position === 'fixed' ? '0px' : '100px',
    bottom: bottom ? `${bottom}px` : '0',
    top: top ? `${top}px` : '0'
  };

  let mobileCssStyles: CSSProperties = {
    maxHeight: "100vh",
    overflowY: "auto",
    height: "100%",
    top: 0,
    bottom: 0
  };

  if (!initialized) return <></>
  return (
    <div className="row" style={{ minHeight: "100vh" }}>
      <div className="col-xl-2">
        {/* Side filters */}
        <>
          {/* FILTERS TOGGLE BTN */}
          <button className="trigger-filters d-none" onClick={() => setIsMobileFilers(!isMobileFilers)}>
            {isMobileFilers ? (
              <CloseIcon />
            ) : (
              <>
                <FiltersIcon />
                Filters
              </>
            )}
          </button>

          <div className="" >
            <div className={`search-filters-wrapper border-end mt-4 p-3 bg-white rounded20 ${isMobileFilers && 'd-block'}`}
              style={isMobileFilers ? { ...mobileCssStyles } : { ...desktopCssStyles }}

            >
              {/* CATEGORIES FILTER SECTION */}
              <div className="single-filter">
                <div
                  className={`filter-title ${!isCategory ? "closed" : ""} `}
                  onClick={() => setIsCategory(!isCategory)}
                >
                  {category}
                </div>
                <div
                  className={`filter-content ${!isCategory ? "hide d-none" : ""
                    }`}
                >
                  {searchFilters.categories.map((category: Category, index: number) => {
                    const hasSub = category.children.length > 0 ? true : false;
                    return (
                      <React.Fragment key={`${category.id}-${index}`}>
                        {hasSub ? (
                          <div
                            className="parent-cat"
                            onClick={(event: any) => {
                              event.preventDefault();
                              toggleChildCategories(category.id)
                            }
                            }
                          >
                            <div>{category.name}</div>
                            <div
                              className={`child-cats ${expandedCategories.includes(category.id)
                                ? "d-block"
                                : "d-none"
                                }`}
                            >
                              {/* ALL FILTERS CHECKBOX */}
                              {category.children && category.children.length > 0 && (
                                <div
                                  className="form-check-label custom-check"
                                  role="button"
                                  onClick={(event: any) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    // checkCategoryAll(category.children)
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    className={`form-check-input category-input my-custom ${checkedArr.includes(category.id) ? 'checked' : ''} `}
                                  />
                                  <p className="m-0">
                                    All From {category.name}
                                  </p>
                                </div>
                              )}
                              {category.children.map((childCategory: Category, i: number) => (
                                <div
                                  key={`${childCategory.id}-${i}`}
                                  className="form-check-label custom-check"
                                  role="button"
                                  onClick={(event: any) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checkedArr.includes(childCategory.id)}
                                    className={`form-check-input category-input my-custom ${checkedArr.includes(childCategory.id) ? 'checked' : ''} `}
                                    onChange={() => {
                                      toggleCheckBox(`${childCategory.id}-${childCategory.name}-category`);
                                      handleSelected(childCategory.name, `${childCategory.id}-${childCategory.name}-category`, childCategory.id)
                                    }}
                                  />
                                  <p className="m-0">
                                    {childCategory.name}{" "}
                                    <small>({childCategory.products_count})</small>
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <>
                            {!category.children.length && (
                              <label className="form-check-label custom-check my-custom">
                                <input
                                  className={`form-check-input`}
                                  type="checkbox"
                                  checked={checkedArr.includes(category.id)}
                                  onChange={() => {
                                    handleSelected(category.name, `${category.id}-${category.name}-category`, category.id);
                                    toggleCheckBox(`${category.id}-${category.name}-category`)
                                  }}
                                />
                                <p className="m-0">{category.name}{" "}<small >({category.products_count})</small></p>
                              </label>
                            )}
                          </>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>


              {/* BRANDS FILTER SECTION */}
              <div className="single-filter">
                <div
                  className={`filter-title ${!isBrand && "closed"} `}
                  onClick={() => setIsBrand(!isBrand)}
                >
                  {brand}
                </div>
                <div
                  className={`filter-content ${!isBrand ? "hide d-none" : ""}`}
                >
                  {searchFilters.brands.slice(0, brandCount).map((brandData: any, index: number) => (
                    <label
                      key={`${brandData.id}-${index}`}
                      className="form-check-label custom-check my-custom"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked={checkHandler(`${brandData.id}-${brandData.name}`, "brand")}
                        onChange={() => {
                          handleSelected(brandData.name, `${brandData.id}-${brandData.name}-brand`, brandData.id);
                          toggleCheckBox(`${brandData.id}-${brandData.name}-brand`)
                        }}
                      />
                      {brandData.name}
                    </label>
                  ))}
                  <span
                    className="fz14 fw-500 mt-4 d-block"
                    onClick={() => setBrandCount(searchFilters.brands.length)}
                  >
                    {see_all}
                  </span>
                </div>
              </div>


              {/* PRICE FILTERS */}
              <div className="single-filter">
                <div
                  className={`filter-title ${!isPrice && "closed"} `}
                  onClick={() => setIsPrice(!isPrice)}
                >
                  {price} (KWD)
                </div>
                <div
                  className={`filter-content ${!isPrice ? "hide hide d-none" : ""}`}
                >
                  <div id="price-slider"></div>
                  <div className="price-filter">
                    <input
                      type="number"
                      name="1"
                      className="number-input"
                      id="input-number1"
                      value={min}
                      onChange={(e) =>
                        setMin(e.target.value)
                      }
                    />
                    {to}
                    <input
                      type="number"
                      name="2"
                      className="number-input "
                      id="input-number2"
                      value={max}
                      onChange={(e) =>
                        setMax(e.target.value)
                      }
                    />
                    {/* Example: Call a function when the apply button is clicked */}
                    <input
                      type="submit"
                      className="apply hover-link"
                      value={`${apply}`}
                      onClick={() => handlePriceChange(min, max)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className="col-xl-10 p-xl-4">
        <div className="search-results-wrapper pt-4">
          {/* Upper Filters */}
          <div className="top-content pb-4 border-bottom">
            <div className="d-md-flex justify-content-between gap-4 align-items-center mb-4">
              <div className="fz16 fw-500 text-black ">
                {showing_the_results_for}
                <span className="text-blue">
                  {" "}<q> {searchParams.search} </q>{" "}
                </span>
                {searchedData?.data?.items_count > 0 && (
                  <small className="bg-secondary text-primary rounded50 p-2 ms-3">
                    {searchedData?.data?.items_count!}
                  </small>
                )}
              </div>

              <div className="sort-by d-flex align-items-center flex-shrink-0">
                <span className="fz14 fw-600 text-black">
                  {" "}{sort_by}:
                </span>

                <select
                  className="nice-select text-blue fz14 ms-2 p-2"
                  style={{
                    border: '1px solid darkgray',
                    borderRadius: '5px'
                  }}
                  value={selectedSortOption}
                  onChange={handleSortChange}
                >
                  <option value="new_arrivals">
                    {new_arrivals}
                  </option>
                  <option value="lowest_price">
                    {lowest_price}
                  </option>
                  <option value="highest_price">
                    {highest_price}
                  </option>
                  <option value="most_relevant">
                    {most_relevant}
                  </option>
                </select>
              </div>
            </div>

            <div className="selected-filters d-md-flex  justify-content-between align-items-start">
              <div className="filters d-flex flex-wrap gap-4">
                {selectedNames &&
                  selectedNames.length > 0 &&
                  selectedNames.map((selected: Selected) => {
                    return (
                      <span
                        key={selected.key}
                        className="bg-secondary text-primary rounded10 p-2 d-inline-flex align-items-center "
                      >
                        {selected.name}{" "}
                        <button
                          className="btn-close ms-2 fz12"
                          onClick={() => handleSelected(selected.name, selected.key, selected.id)}
                        />
                      </span>
                    );
                  })}
              </div>
              <button
                onClick={handleClearAllSelections}
                className="btn btn-outline-danger fw-600 fz14"
              >
                {clear_all_filters}
              </button>
            </div>
          </div>
        </div>
        <SearchedProducts
          lang={lang}
          data={searchedData?.data! || {}}
          tProduct={tProduct}
          searchParams={searchParams}
          session={session ? session : null}
        />
      </div>
    </div>
  );
};

export default FiltersWrapper;
