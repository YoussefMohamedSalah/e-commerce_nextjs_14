import dynamic from "next/dynamic";
import React from "react";
import { categoryService } from "@/services/category.service";
import FeaturedOne from '@/components/home/featuredOne';
import TwoWideBanners from "@/components/home/twoWideBanners";

const MainCarousel = dynamic(() =>
  import("../../../../../components/home/mainCarousel")
);

const TopCategories = dynamic(() =>
  import("../../../../../components/home/topCategories")
);
const BrandsCarouselWrapper = dynamic(() =>
  import("../../../../../components/home/brandsCarouselWrapper")
);

interface Props {
  params: { locale: string; slug: string };
}

export const metadata = {
  title: "Category",
  description: "Page Description"
};

async function getSingleCategoryBanners(slug: string, lang: string) {
  const response = await categoryService.getSingleCategoryBanners(slug, lang);
  if (response && response.success) {
    return response;
  }
}

async function getSingleCategoryChildren(slug: string, lang: string) {
  const response = await categoryService.getSingleCategoryChildren(slug, lang);
  if (response && response.success) {
    return response;
  }
}

async function getSingleCategoryBrands(slug: string, lang: string) {
  const response = await categoryService.getSingleCategoryBrands(slug, lang);
  if (response && response.success) {
    return response;
  }
}

async function getSingleCategorySections(slug: string, lang: string) {
  const response = await categoryService.getSingleCategorySections(slug, lang);
  if (response && response.success) {
    return response.data;
  }
}
export default async function SingleCategoryPage({
  params: { locale, slug }
}: Props) {
  const categoriesBanners = await getSingleCategoryBanners(slug, locale);
  const categoriesRelatedCategories = await getSingleCategoryChildren(
    slug,
    locale
  );
  const categoriesRelatedBrands = await getSingleCategoryBrands(slug, locale);
  const categoriesSubSections = await getSingleCategorySections(slug, locale);

  const handleContent = (section: any) => {
    switch (section.banner_type) {
      case 'first_four_banners':
        return <FeaturedOne data={section} />;
      case 'two_banners':
        return <TwoWideBanners data={section} />;
      default:
        break;
    }
  };

  return (
    <main>
      {categoriesBanners &&
        categoriesBanners.data &&
        categoriesBanners.data.length > 0 &&
        <MainCarousel
          data={categoriesBanners.data}
          autoPlay={categoriesBanners.data.length === 1 ? false : true}
          showDots={categoriesBanners.data.length === 1 ? false : true}
        />}
      {categoriesRelatedCategories &&
        <TopCategories
          isSubCategory={true}
          data={categoriesRelatedCategories.data}
          locale={locale}
        />}
      {categoriesRelatedBrands &&
        <BrandsCarouselWrapper
          brands={categoriesRelatedBrands}
          isBtns={true}
          locale={locale}
        />}
      {categoriesSubSections && (
        <>
          {categoriesSubSections.map((section: any, index: number) =>
            <div key={index}>
              {handleContent(section)}
            </div>
          )}
        </>
      )}
    </main>
  );
}
