export const siteSettings = {
  name: "A2Z",
  description: "",
  url: "https://localhost:3000",
  author: {
    name: "",
    websiteUrl: "#",
    address: ""
  },
  logo: {
    url: "/assets/footer-logo.png",
    urlReverse: "/assets/footer-logo.png",
    alt: "A2Z",
    href: "/",
    width: 68,
    height: 74
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    topMenu: [
      {
        id: 1,
        path:
          "/products?search=&page=1&per_page=12&orderBy=created_at&orderType=desc&price_from=&price_to=&selections=",
        label: "menu-whats-new"
      },
      {
        id: 2,
        path: "/blogs",
        label: "menu-blog"
      },
      {
        id: 3,
        path: "/about-us",
        label: "menu-about-us"
      },
      {
        id: 4,
        path: "/contact-us",
        label: "menu-contact-us"
      }
    ]
  }
};
