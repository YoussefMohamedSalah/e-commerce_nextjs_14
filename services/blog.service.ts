import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const blogService = {
    getAllBlogs,
    getSingleBlog,
    getRelatedBlogs
};

// EN
const BLOG_ALL_BLOG_URL = `${BASE_API_URL}${ROUTES.BLOG_ALL_BLOG_ENDPOINT}`;
const BLOG_SINGLE_BLOG_URL = `${BASE_API_URL}${ROUTES.BLOG_ALL_BLOG_ENDPOINT}`;
const BLOG_RELATED_BLOGS_URL = `${BASE_API_URL}${ROUTES.BLOG_SINGLE_BLOG_ENDPOINT}`;
// AR
const BLOG_ALL_BLOG_AR_URL = `${BASE_API_URL}/ar${ROUTES.BLOG_ALL_BLOG_ENDPOINT}`;
const BLOG_SINGLE_BLOG_AR_URL = `${BASE_API_URL}/ar${ROUTES.BLOG_ALL_BLOG_ENDPOINT}`;
const BLOG_RELATED_BLOGS_AR_URL = `${BASE_API_URL}/ar${ROUTES.BLOG_SINGLE_BLOG_ENDPOINT}`;

async function getAllBlogs(lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${BLOG_ALL_BLOG_AR_URL}`, null);
    } else return await fetchWrapper.get(`${BLOG_ALL_BLOG_URL}`, null);
};

async function getSingleBlog(id: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${BLOG_SINGLE_BLOG_AR_URL}/${id}`, null);
    } else return await fetchWrapper.get(`${BLOG_SINGLE_BLOG_URL}/${id}`, null);
};

async function getRelatedBlogs(id: string, lang: string) {
    if (lang === "ar") {
        return await fetchWrapper.get(`${BLOG_RELATED_BLOGS_AR_URL}${id}/related`, null);
    } else return await fetchWrapper.get(`${BLOG_RELATED_BLOGS_URL}${id}/related`, null);
};
