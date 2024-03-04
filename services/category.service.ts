import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const categoryService = {
    getSingleCategoryChildren,
    getSingleCategoryBrands,
    getSingleCategoryBanners,
    getSingleCategorySections
};

// EN
const CATEGORY_URL = `${BASE_API_URL}${ROUTES.CATEGORY_ENDPOINT}`;
const SECTIONS_URL = `${BASE_API_URL}${ROUTES.SECTIONS_ENDPOINT}`;
// AR
const CATEGORY_AR_URL = `${BASE_API_URL}/ar${ROUTES.CATEGORY_ENDPOINT}`;
const SECTIONS_AR_URL = `${BASE_API_URL}/ar${ROUTES.SECTIONS_ENDPOINT}`;

async function getSingleCategoryBanners(slug: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${CATEGORY_AR_URL}sliders?slug=${slug}`, null);
    } else return await fetchWrapper.get(`${CATEGORY_URL}sliders?slug=${slug}`, null);
};

async function getSingleCategoryChildren(slug: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${CATEGORY_AR_URL}${slug}/children`, null);
    } else return await fetchWrapper.get(`${CATEGORY_URL}${slug}/children`, null);
};

async function getSingleCategoryBrands(slug: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${CATEGORY_AR_URL}${slug}/brands`, null);
    } else return await fetchWrapper.get(`${CATEGORY_URL}${slug}/brands`, null);
};


async function getSingleCategorySections(slug: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${SECTIONS_AR_URL}?page=category&slug=${slug}`, null);
    } else return await fetchWrapper.get(`${SECTIONS_URL}?page=category&slug=${slug}`, null);
};

