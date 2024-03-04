import { ResponsiveType } from "react-multi-carousel"

export const PRODUCTS_BREAKPOINTS: ResponsiveType = {
    largeDesktop: {
        breakpoint: { max: 3000, min: 1600 },
        items: 6,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 1600, min: 1200 },
        items: 5,
        slidesToSlide: 1
    },
    betweenDesktopAndTablet: {
        breakpoint: { max: 1200, min: 1024 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 850 },
        items: 4,
        slidesToSlide: 1
    },
    betweenTabletAndMobile: {
        breakpoint: { max: 850, min: 600 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 599, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

export const TOP_CATEGORIES_BREAKPOINTS: ResponsiveType = {
    largeDesktop: {
        breakpoint: { max: 3000, min: 1600 },
        items: 10,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 1600, min: 1200 },
        items: 8,
        slidesToSlide: 1
    },
    betweenDesktopAndTablet: {
        breakpoint: { max: 1200, min: 1024 },
        items: 8,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 850 },
        items: 6,
        slidesToSlide: 1
    },
    betweenTabletAndMobile: {
        breakpoint: { max: 850, min: 600 },
        items: 4,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 599, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

export const BRANDS_BREAKPOINTS: ResponsiveType = {
    largeDesktop: {
        breakpoint: { max: 3000, min: 1600 },
        items: 10,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: { max: 1600, min: 1200 },
        items: 10,
        slidesToSlide: 1
    },
    betweenDesktopAndTablet: {
        breakpoint: { max: 1200, min: 1024 },
        items: 8,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 850 },
        items: 6,
        slidesToSlide: 1
    },
    betweenTabletAndMobile: {
        breakpoint: { max: 850, min: 600 },
        items: 4,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 599, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

export const SINGLE_ITEM_BREAKPOINTS: ResponsiveType = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export const SINGLE_PRODUCT_SUB_CAROUSEL_BREAKPOINTS: ResponsiveType = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 3,
        slidesToSlide: 1
    }
};