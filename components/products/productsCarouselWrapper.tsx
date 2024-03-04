import React from "react";
import ProductsCarousel from "./ProductsCarousel";
import { useTranslations } from "next-intl";
import { Session } from "@/types/session";

interface Props {
  data: any;
  title: string;
  isCategories: boolean;
  isBtn?: boolean;
  className: string;
  session: Session | null;
};

export default function ProductsCarouselWrapper({
  data,
  title,
  isCategories,
  isBtn,
  className,
  session
}: Props) {
  const t = useTranslations("Common");
  const tProduct = {
    add_to_cart: `${t("add-to-cart")}`,
    not_available: `${t("not-available")}`,
    all: `${t("all")}`,
    show_cart: `${t("show-cart")}`,
    shop_all: `${t("shop-all")}`
  };
  return (
    <section className="featured-products products-slider mb-5">
      <ProductsCarousel
        data={data}
        title={title}
        isCategories={isCategories}
        tProduct={tProduct}
        isBtn={isBtn}
        className={className}
        session={session ? session : null}
      />
    </section>
  );
}
