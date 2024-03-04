import React from "react";
import { commonService } from "@/services/common.service";
import ProductsWrapper from "@/components/filters/ProductsWrapper";
import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

export interface UrlParams {
  search?: any;
  page?: any;
  per_page?: string;
  orderBy?: any;
  orderType?: any;
  price_from?: any;
  price_to?: any;
  selections?: any;
  [key: string]: any;
};

const serializeSelections = (selections: string) => {
  if (selections) {
    const selectionArray = selections?.split(",").map(item => item.trim());
    let categories: string[] = [];
    let brands: string[] = [];
    let categoriesString = "";
    let brandsString = "";

    selectionArray.forEach(selection => {
      // Replace spaces with dashes
      const stripedText = selection?.replace(/\s+/g, "-");
      let textArr = stripedText.split("-");

      // Check the last element of textArr
      let lastWord = textArr[textArr.length - 1];

      if (lastWord === "brand") {
        brands.push(stripedText);
      } else if (lastWord === "category") {
        categories.push(stripedText);
      } else {
        return null;
      }
    });

    categories.forEach(category => {
      const categoryId = category.split("-")[0];
      categoriesString += `&categories[]=${categoryId}`;
    });

    brands.forEach(brand => {
      const brandId = brand.split("-")[0];
      brandsString += `&brands[]=${brandId}`;
    });

    return `${categoriesString}${brandsString}`;
  } else return "";
};

async function getAllProducts(searchParams: UrlParams, lang: string) {
  try {
    const urlParams: UrlParams = {
      search: searchParams.search || '',
      page: searchParams.page || '1',
      per_page: searchParams.per_page || '12',
      orderBy: searchParams.orderBy || '',
      orderType: searchParams.orderType || '',
      price_from: searchParams.price_from || '',
      price_to: searchParams.price_to || '',
      selections: searchParams.selections || ''
    };

    let baseFilterString = '';
    for (const key in urlParams) {
      if (Object.prototype.hasOwnProperty.call(urlParams, key)) {
        const item = urlParams[key];
        if (key === "selections") {
          let serialized = serializeSelections(item);
          baseFilterString = baseFilterString + `${serialized}`;
        } else {
          baseFilterString = baseFilterString + `&${key}=${item ? item : ''}`;
        }
      }
    }

    if (baseFilterString.startsWith("&")) baseFilterString = baseFilterString.slice(1);

    const response = await fetch(
      `${BASE_API_URL}${ROUTES.PRODUCT_ENDPOINT}?${baseFilterString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": `${lang}`
        },
      }
    );
    let data = await response.json()

    return data;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    // throw error; // rethrow the error to be caught by the calling code
  }
};

async function getSearchFilters(lang: string) {
  const response = await commonService.getSearchFilters(lang);
  if (response && response.success) {
    return response.data;
  }
};

export default async function ProductsPage({ searchParams, params }: any) {
  const session: Session | null = await getServerSession(authConfig);

  const productsData = await getAllProducts(searchParams, params.locale);
  const searchFilters = await getSearchFilters(params.locale);

  return (
    <main>
      <ProductsWrapper
        searchFilters={searchFilters}
        searchedData={productsData}
        searchParams={searchParams || {}}
        lang={params.locale}
        session={session ? session : null}
      />
    </main>
  );
}
