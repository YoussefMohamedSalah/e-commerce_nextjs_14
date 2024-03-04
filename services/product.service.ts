import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const productService = {
    getSingleProduct,
    getRelatedProductsByCategory,
    getRelatedProductsByBrand,
    getAllProducts
};

// EN
const PRODUCT_URL = `${BASE_API_URL}${ROUTES.PRODUCT_ENDPOINT}`;
const PRODUCT_RELATED_CATEGORY_URL = `${BASE_API_URL}${ROUTES.CATEGORY_ENDPOINT}`;
const PRODUCT_RELATED_BRAND_URL = `${BASE_API_URL}${ROUTES.BRAND_ENDPOINT}`;

// AR
const PRODUCT_AR_URL = `${BASE_API_URL}/ar${ROUTES.PRODUCT_ENDPOINT}`;
const PRODUCT_RELATED_CATEGORY_AR_URL = `${BASE_API_URL}/ar${ROUTES.CATEGORY_ENDPOINT}`;
const PRODUCT_RELATED_BRAND_AR_URL = `${BASE_API_URL}/ar${ROUTES.BRAND_ENDPOINT}`;

async function getSingleProduct(id: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${PRODUCT_AR_URL}/${id}`, null);
    } else return await fetchWrapper.get(`${PRODUCT_URL}/${id}`, null);
};

async function getRelatedProductsByCategory(id: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${PRODUCT_RELATED_CATEGORY_AR_URL}${id}/products`, null);
    } else return await fetchWrapper.get(`${PRODUCT_RELATED_CATEGORY_URL}${id}/products`, null);
};

async function getRelatedProductsByBrand(id: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${PRODUCT_RELATED_BRAND_AR_URL}${id}/products`, null);
    } else return await fetchWrapper.get(`${PRODUCT_RELATED_BRAND_URL}${id}/products`, null);
};

async function getAllProducts(searchParams: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${PRODUCT_AR_URL}?${searchParams}`, null);
    } else return await fetchWrapper.get(`${PRODUCT_URL}?${searchParams}`, null)
};