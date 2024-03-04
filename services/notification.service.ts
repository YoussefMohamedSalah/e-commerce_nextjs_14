import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const notificationService = {
    getAllNotifications,
};

const Notifications_URL = `${BASE_API_URL}${ROUTES.NOTIFICATIONS_ENDPOINT}`;

async function getAllNotifications() {
    return await fetchWrapper.get(`${Notifications_URL}`, null);
};
