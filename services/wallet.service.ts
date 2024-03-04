import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const walletService = {
	getAllWallets,
	createWallet,
	deleteWallet,
	editWallet,
};

// EN
const ACCOUNT_WALLET_URL = `${BASE_API_URL}${ROUTES.ACCOUNT_WALLET_ENDPOINT}`;

// AR
const ACCOUNT_WALLET_AR_URL = `${BASE_API_URL}/ar${ROUTES.ACCOUNT_WALLET_ENDPOINT}`;

async function getAllWallets(lang: string) {
	if (lang === "ar") {
		return await fetchWrapper.get(`${ACCOUNT_WALLET_AR_URL}`, null);
	} else return await fetchWrapper.get(`${ACCOUNT_WALLET_URL}`, null);
};

async function createWallet(name: string, website: string, categories: string[]) {
	return await fetchWrapper.post(`${ACCOUNT_WALLET_URL}`, {
		name,
		website,
		categories
	});
}

async function editWallet(
	id: number,
	name: string,
	website: string,
	categories: string[]
) {
	return await fetchWrapper.put(`${ACCOUNT_WALLET_URL}${id}/`, {
		name,
		website,
		categories
	});
};

async function deleteWallet(id: number) {
	return await fetchWrapper.delete(`${ACCOUNT_WALLET_URL}${id}/`, null);
};
