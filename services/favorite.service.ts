import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const favoritesService = {
    getAllFavorites,
};

const ACCOUNT_FAVORITES_URL = `${BASE_API_URL}${ROUTES.ACCOUNT_FAVORITES_ENDPOINT}`;

async function getAllFavorites() {
    return await fetchWrapper.get(`${ACCOUNT_FAVORITES_URL}`, null);
}
