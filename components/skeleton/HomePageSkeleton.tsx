import React from "react";
import TopCategoriesSkeleton from "./TopCategoriesSkeleton";
import MainBannerSkeleton from "./MainBannerSkeleton";
import ShopByBrandSkeleton from "./ShopByBrandSkeleton";
import LatestBlogsSkeleton from "./LatestBlogsSkeleton";

const HomePageSkeleton = () => {
  return (
    <>
    <MainBannerSkeleton />
    <TopCategoriesSkeleton />
    <ShopByBrandSkeleton />
    <LatestBlogsSkeleton />
    </>
  );
};

export default HomePageSkeleton;
