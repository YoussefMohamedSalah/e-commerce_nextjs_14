import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const commonService = {
    getCategoriesLinks,
    getHeaderMainCategoriesLinks,
    getFooterCategories,
    getSearchFilters,
    getSiteSettings
};

// EN
const SITE_SETTINGS_URL = `${BASE_API_URL}${ROUTES.SITE_SETTINGS_ENDPOINT}`;
const HEADER_CATEGORIES_URL = `${BASE_API_URL}${ROUTES.HEADER_CATEGORIES_ENDPOINT}`;
const SEARCH_FILTERS_URL = `${BASE_API_URL}${ROUTES.SEARCH_FILTERS_ENDPOINT}`;

const HEADER_MAIN_CATEGORIES_URL = `${BASE_API_URL}${ROUTES.HEADER_MAIN_CATEGORIES_ENDPOINT}`;
const FOOTER_MAIN_CATEGORIES_URL = `${BASE_API_URL}${ROUTES.FOOTER_MAIN_CATEGORIES_ENDPOINT}`;
// AR
const SITE_SETTINGS_AR_URL = `${BASE_API_URL}/ar${ROUTES.SITE_SETTINGS_ENDPOINT}`;
const HEADER_CATEGORIES_AR_URL = `${BASE_API_URL}/ar${ROUTES.HEADER_CATEGORIES_ENDPOINT}`;
const SEARCH_FILTERS_AR_URL = `${BASE_API_URL}/ar${ROUTES.SEARCH_FILTERS_ENDPOINT}`;
const HEADER_MAIN_CATEGORIES_AR_URL = `${BASE_API_URL}/ar${ROUTES.HEADER_MAIN_CATEGORIES_ENDPOINT}`;
const FOOTER_MAIN_CATEGORIES_AR_URL = `${BASE_API_URL}/ar${ROUTES.FOOTER_MAIN_CATEGORIES_ENDPOINT}`;


async function getSiteSettings(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${SITE_SETTINGS_AR_URL}`, null);
    } else return await fetchWrapper.get(`${SITE_SETTINGS_URL}`, null);
};

async function getCategoriesLinks(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HEADER_CATEGORIES_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HEADER_CATEGORIES_URL}`, null);
};

async function getSearchFilters(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${SEARCH_FILTERS_AR_URL}`, null);
    } else return await fetchWrapper.get(`${SEARCH_FILTERS_URL}`, null);
};

async function getHeaderMainCategoriesLinks(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HEADER_MAIN_CATEGORIES_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HEADER_MAIN_CATEGORIES_URL}`, null);
};

async function getFooterCategories(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${FOOTER_MAIN_CATEGORIES_AR_URL}`, null);
    } else return await fetchWrapper.get(`${FOOTER_MAIN_CATEGORIES_URL}`, null);
};