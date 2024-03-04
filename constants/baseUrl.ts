/**
 * The base URL for the API.
 * @constant
 */
export const BASE_API_URL = process.env.NEXT_PUBLIC_REST_API_ENDPOINT
    ? process.env.NEXT_PUBLIC_REST_API_ENDPOINT
    : "http://localhost:3000";
