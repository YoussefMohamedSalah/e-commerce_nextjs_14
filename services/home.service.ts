import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const homeService = {
    getMainCarousel,
    getNewArrivals,
    getBestSellers,
    getBlogs,
    getBrands,
    getTopCategories,
    getHomePage
};

// EN
const HOME_MAIN_PAGE_URL = `${BASE_API_URL}${ROUTES.HOME_MAIN_PAGE_ENDPOINT}`;
const HOME_MAIN_CAROUSEL_URL = `${BASE_API_URL}${ROUTES.HOME_MAIN_CAROUSEL_ENDPOINT}`;
const HOME_NEW_ARRIVALS_URL = `${BASE_API_URL}${ROUTES.HOME_NEW_ARRIVALS_ENDPOINT}`;
const HOME_BEST_SELLERS_URL = `${BASE_API_URL}${ROUTES.HOME_BEST_SELLERS_ENDPOINT}`;
const HOME_BLOGS_URL = `${BASE_API_URL}${ROUTES.HOME_BLOGS_ENDPOINT}`;
const HOME_BRANDS_URL = `${BASE_API_URL}${ROUTES.HOME_BRANDS_ENDPOINT}`;
const HOME_TOP_CATEGORIES_URL = `${BASE_API_URL}${ROUTES.HOME_TOP_CATEGORIES_ENDPOINT}`;

// AR
const HOME_MAIN_PAGE_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_MAIN_PAGE_ENDPOINT}`;
const HOME_MAIN_CAROUSEL_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_MAIN_CAROUSEL_ENDPOINT}`;
const HOME_NEW_ARRIVALS_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_NEW_ARRIVALS_ENDPOINT}`;
const HOME_BEST_SELLERS_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_BEST_SELLERS_ENDPOINT}`;
const HOME_BLOGS_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_BLOGS_ENDPOINT}`;
const HOME_BRANDS_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_BRANDS_ENDPOINT}`;
const HOME_TOP_CATEGORIES_AR_URL = `${BASE_API_URL}/ar${ROUTES.HOME_TOP_CATEGORIES_ENDPOINT}`;


async function getMainCarousel(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_MAIN_CAROUSEL_AR_URL}`, null);
    } else
        return await fetchWrapper.get(`${HOME_MAIN_CAROUSEL_URL}`, null);
};

async function getNewArrivals(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_NEW_ARRIVALS_AR_URL}`, null);
    } else
        return await fetchWrapper.get(`${HOME_NEW_ARRIVALS_URL}`, null);
};

async function getBestSellers(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_BEST_SELLERS_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HOME_BEST_SELLERS_URL}`, null);
};

async function getBlogs(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_BLOGS_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HOME_BLOGS_URL}`, null);
};

async function getBrands(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_BRANDS_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HOME_BRANDS_URL}`, null);
};

async function getTopCategories(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_TOP_CATEGORIES_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HOME_TOP_CATEGORIES_URL}`, null);
};

async function getHomePage(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${HOME_MAIN_PAGE_AR_URL}`, null);
    } else return await fetchWrapper.get(`${HOME_MAIN_PAGE_URL}`, null);
};