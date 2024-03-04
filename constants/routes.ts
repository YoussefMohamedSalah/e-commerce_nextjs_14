export const ROUTES = {
  /**
* The endpoint to perform operations with site settings components.
* @constant
*/
  SITE_SETTINGS_ENDPOINT: "/sitting",
  SEARCH_FILTERS_ENDPOINT: "/products/filter/data",
  SECTIONS_ENDPOINT: "/sections",

  // sitting
  /**
 * The endpoint to perform operations with header components.
 * @constant
 */
  HEADER_CATEGORIES_ENDPOINT: "/home/all-categories-links",
  HEADER_MAIN_CATEGORIES_ENDPOINT: "/home/categories-links",

  /**
 * The endpoint to perform operations with footer components.
 * @constant
 */
  FOOTER_MAIN_CATEGORIES_ENDPOINT: "/footer-categories",

  /**
 * The endpoint to perform operations with home page components.
 * @constant
 */
  HOME_MAIN_PAGE_ENDPOINT: "/sections?page=home",
  HOME_MAIN_CAROUSEL_ENDPOINT: "/sliders",
  HOME_NEW_ARRIVALS_ENDPOINT: "/home/new-arrivals",
  HOME_BEST_SELLERS_ENDPOINT: "/home/best-sellers",
  HOME_BLOGS_ENDPOINT: "/home/blogs",
  HOME_BRANDS_ENDPOINT: "/home/brands",
  HOME_TOP_CATEGORIES_ENDPOINT: "/home/categories",

  /**
 * The endpoint to perform operations with blog page components.
 * @constant
 */
  BLOG_ALL_BLOGS_ENDPOINT: "/blogs?order=asc&per_page=5",
  BLOG_ALL_BLOG_ENDPOINT: "/blogs",
  BLOG_SINGLE_BLOG_ENDPOINT: "/blog/",

  /**
 * The endpoint to perform operations with products page components.
 * @constant
 */
  PRODUCT_ENDPOINT: "/products",
  PRODUCT_RELATED_CATEGORY: '/category',
  PRODUCT_RELATED_BRAND: '/brand',

  /**
 * The endpoint to perform operations with category components.
 * @constant
 */
  CATEGORY_ENDPOINT: "/category/",

  /**
 * The endpoint to perform operations with brand components.
 * @constant
 */
  BRAND_ENDPOINT: "/brand/",

  /**
* The endpoint to perform operations with contact components.
* @constant
*/
  CONTACT_US_REQUEST_ENDPOINT: "/contact-us",

  /**
 * The endpoint to perform operations with account.
 * @constant
 */
  ACCOUNT_PROFILE_ENDPOINT: "/profile",
  ACCOUNT_ORDER_ENDPOINT: "/profile/orders",
  ACCOUNT_FAVORITES_ENDPOINT: "/profile/favourites",
  ACCOUNT_WALLET_ENDPOINT: "/profile/wallet",
  NOTIFICATIONS_ENDPOINT: "/user/notifications"

};
