import { BASE_API_URL } from "@/constants/baseUrl.js";

export const handleLocalePath = (path: string) => {
    return BASE_API_URL + path;
}