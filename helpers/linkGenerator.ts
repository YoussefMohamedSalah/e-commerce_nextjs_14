import { BASE_API_URL } from "@/constants/baseUrl.js";


export const linkGenerator = (path: string) => {

    return BASE_API_URL + path;
}

export default linkGenerator