import { localePrefix, locales } from "app/navigation";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'en'
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};