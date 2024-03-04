import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const commonService = {
    contactUsRequest
};

// EN
const CONTACT_US_REQUEST_URL = `${BASE_API_URL}${ROUTES.CONTACT_US_REQUEST_ENDPOINT}`;


async function contactUsRequest() {
    return await fetchWrapper.post(`${CONTACT_US_REQUEST_URL}`, null);
};