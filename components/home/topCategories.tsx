import React from "react";
import TopCategoriesCarousel from "./topCategoriesCarousel";
import { useTranslations } from "next-intl";

interface Props {
  locale: string;
  data: any;
  isSubCategory: boolean;
};

export default function TopCategories({ data, locale, isSubCategory }: Props) {
  const t = useTranslations("Common");

  return (
    <section className="featured-categories mb-5">
      <div className=" px-8">
        <div className="d-flex justify-content-between align-items-center mb-2rem">
          <div className="section-title mb-0">
            {t("top-categories")}
          </div>
        </div>
        <TopCategoriesCarousel
          categories={data}
          locale={locale}
          isSubCategory={isSubCategory}
        />
      </div>
    </section>
  );
}
