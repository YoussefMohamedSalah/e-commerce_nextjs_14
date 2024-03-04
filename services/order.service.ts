import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const orderService = {
	getAllOrders,
	createOrder,
	deleteOrder,
	editOrder,
};

// EN
const ORDER_URL = `${BASE_API_URL}${ROUTES.ACCOUNT_ORDER_ENDPOINT}`;

// AR
const ORDER_AR_URL = `${BASE_API_URL}/ar${ROUTES.ACCOUNT_ORDER_ENDPOINT}`;

async function getAllOrders(lang: string) {
	if (lang === "ar") {
		return await fetchWrapper.get(`${ORDER_AR_URL}`, null);
	} else return await fetchWrapper.get(`${ORDER_URL}`, null);
};

async function createOrder(name: string, website: string, categories: string[]) {
	return await fetchWrapper.post(`${ORDER_URL}`, {
		name,
		website,
		categories
	});
};

async function editOrder(
	id: number,
	name: string,
	website: string,
	categories: string[]
) {
	return await fetchWrapper.put(`${ORDER_URL}${id}/`, {
		name,
		website,
		categories
	});
};

async function deleteOrder(id: number) {
	return await fetchWrapper.delete(`${ORDER_URL}${id}/`, null);
};
