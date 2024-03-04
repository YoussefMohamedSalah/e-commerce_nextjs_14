import { BASE_API_URL } from "@/constants/baseUrl";
import { SignupTerms } from "@/types/auth";
import { fetchWrapper } from "@/helpers/fetch-wrapper";

export const authService = {
	login,
	register
};

async function login(
	email?: string,
	password?: string,
	locale?: string
): Promise<LoginResponse | any> {

	const res = await fetchWrapper.post(`${BASE_API_URL}${locale === 'ar' ? '/ar' : ""}/login`, {
		email: `${email}`,
		password: `${password}`,
	});
	return res;
}

async function register({
	name,
	last_name,
	email,
	password,
	password_confirmation,
	locale
}: SignupTerms): Promise<LoginResponse | any> {
	return await fetchWrapper.post(`${BASE_API_URL}${locale === 'ar' ? '/ar' : ""}/register`, {
		name,
		last_name,
		email,
		password,
		password_confirmation
	});
}
