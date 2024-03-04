"use client";
import MenuHamburgerIcon from "@/components/svg/menuHamburger";
import React, { useState, useRef, useEffect } from "react";
import HeaderCategoriesMenu from "./HeaderCategoriesMenu";
import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";

interface Props {
  dropDownData: any;
  mainCategoriesData: any;
  allCatText: string;
  topMenu: any[];
}

export default function MainHeaderNav({
  dropDownData,
  mainCategoriesData,
  allCatText,
  topMenu
}: Props) {
  const [isOver, setIsOver] = useState<boolean>(false);
  const categoryRefs = useRef(mainCategoriesData.map(() => React.createRef()));

  useEffect(
    () => {
      const handleClickOutside = (event: any) => {
        categoryRefs.current.forEach((ref: any) => {
          if (ref.current && !ref.current.contains(event.target)) {
            ref.current.classList.remove("show", "custom-show");
          }
        });
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    },
    [categoryRefs]
  );


  const handleCategoryClick = (index: number) => {
    const categoryElement = categoryRefs.current[index].current;
    const subCategoryElement = categoryElement.querySelector(".submenu");

    // Toggle classes on the clicked category element
    categoryElement.classList.toggle("show");
    categoryElement.classList.toggle("custom-show");

    // Toggle classes on the subcategory element (if it exists)
    if (subCategoryElement) {
      subCategoryElement.classList.toggle("show");
      subCategoryElement.classList.toggle("custom-show");
    }

    // Close other categories' subcategories
    categoryRefs.current.forEach((ref: any, i: number) => {
      if (i !== index) {
        const otherSubCategoryElement = ref.current.querySelector(".submenu");
        if (otherSubCategoryElement) {
          otherSubCategoryElement.classList.remove("show", "custom-show");
        }
      }
    });
  };

  const handleSubCategoryClick = (index: number, parentIndex: number) => {
    const parentRef = categoryRefs.current[parentIndex].current;
    const subCategoryElement = parentRef.querySelectorAll(".submenu")[index];

    if (subCategoryElement) {
      subCategoryElement.classList.toggle("show");
      subCategoryElement.classList.toggle("custom-show");

      parentRef.querySelectorAll(".submenu").forEach((ref: any, i: number) => {
        if (i !== index) {
          ref.classList.remove("show", "custom-show");
        }
      });
    } else {
      // Close other subcategories in the parent category
      const otherCategories = parentRef.parentElement.querySelectorAll(".dropdown-menu .submenu");
      otherCategories.forEach((ref: any) => {
        ref.classList.remove("show", "custom-show");
      });
    }
  };

  return (
    <div className="collapse navbar-collapse" id="main_nav">
      <ul className="navbar-nav">
        <li
          className="nav-item dropdown all-categories-li"
          style={{ zIndex: 88888 }}
        >
          <a className="nav-link has-sub" href="#" data-bs-toggle="dropdown"
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
          >
            <MenuHamburgerIcon fill={isOver ? "#264AEC" : "white"} />
            {allCatText}
          </a>
          <HeaderCategoriesMenu data={dropDownData} />
        </li>
        {/* Nav Main Links */}
        {mainCategoriesData.map((category: any, index: number) => {
          const hasSub = category.children.length > 0;
          return (
            <li
              className={`nav-item dropdown  d-flex justify-content-between`}
              key={`category--key-${category.id}`}
              ref={categoryRefs.current[index]}
            >
              <a
                style={{ cursor: "pointer" }}
                className={`nav-link has-sub ${hasSub
                  ? "dropdown-toggle"
                  : ""}`}
                onClick={() => handleCategoryClick(index)}
                data-bs-toggle="dropdown"
              >
                {category.name}
              </a>
              {hasSub &&
                <ul className="submenu dropdown-menu pointer">
                  {category.children.map((subCategory: any, i: number) => {
                    const hasSubCategory = subCategory.children.length > 0;

                    let href = !hasSubCategory
                      ? {
                        pathname: PAGES.PRODUCTS,
                        query: { selections: `${subCategory.id}-${subCategory.name}-category` }
                      }
                      : `#`;

                    return (
                      <li key={`subcategory--key-${subCategory.id}`} onClick={() => handleSubCategoryClick(i, index)}>
                        <Link
                          className={`dropdown-item ${hasSubCategory && "has-sub"} d-flex justify-content-between`}
                          href={href}
                        >
                          {subCategory.name} {subCategory.products_count > 0 && `(${subCategory.products_count})`}
                        </Link>
                        {hasSubCategory &&
                          <ul className="submenu dropdown-menu">
                            {subCategory.children.map((subSubCategory: any) => {
                              const hasSubSubCategory = subSubCategory.children.length > 0;

                              let href = !hasSubSubCategory
                                ? {
                                  pathname: PAGES.PRODUCTS,
                                  query: { selections: `${subSubCategory.id}-${subSubCategory.name}-category` }
                                }
                                : `#`;

                              return (
                                <li key={`subSubcategory--key-${subSubCategory.id}`}>
                                  <Link
                                    className="dropdown-item d-flex justify-content-between"
                                    href={href}
                                  >
                                    {subSubCategory.name} ({subSubCategory.products_count})
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        }
                      </li>
                    )
                  }
                  )}
                </ul>}
            </li>
          );
        })}
      </ul>
      <ul className="mobile-mini-nav list-unstyled mb-0 d-lg-none">
        {topMenu?.map((item: any) => (
          <li className="nav-item" key={item.id}>
            <Link
              href={item.path}
              className="nav-link"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
