import React from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const ShopByBrandCarousel = dynamic(() =>
  import("../../components/home/brandsCarousel")
);

interface Props {
  brands: any;
  isBtns?: boolean;
  locale: string;
}

export default function BrandsCarouselWrapper({
  brands,
  isBtns,
  locale
}: Props) {
  const t = useTranslations("Common");

  return (
    <section className="featured-products products-slider mb-5">
      <ShopByBrandCarousel
        brands={brands}
        title={`${t("shop-by-brand")}`}
        isBtns={isBtns}
        locale={locale}
      />
    </section>
  );
}
