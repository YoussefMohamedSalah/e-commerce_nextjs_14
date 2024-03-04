import { BASE_API_URL } from "@/constants/baseUrl"
import { ROUTES } from "@/constants/routes"

export const getSiteSettings = async () => {
    const res = await fetch(`${BASE_API_URL}${ROUTES.SITE_SETTINGS_ENDPOINT}`)
    return res.json();
}