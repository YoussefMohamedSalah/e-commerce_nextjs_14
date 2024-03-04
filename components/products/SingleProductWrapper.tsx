import React from "react";
import { SingleProductType } from "@/types/product";
import SingleProduct from "./SingleProduct";
import { useTranslations } from "next-intl";
import { Session } from "@/types/session";
// import { Session } from "@/types/session";


interface Props {
  data: SingleProductType;
  lang: string;
  session: Session | null;
};

export default function SingleProductWrapper({ data, lang, session }: Props) {
  const t = useTranslations("Common");

  const tProduct = {
    add_to_cart: `${t("add-to-cart")}`,
    not_available: `${t("not-available")}`,
    all: `${t("all")}`,
    show_cart: `${t("show-cart")}`,
    buy_now: `${t("buy-now")}`,
    quantity: `${t("quantity")}`,
    more_from: `${t("more-from")}`,
    you_may_like: `${t("you-may-like")}`,
    product_details: `${t("product-details")}`,
    reviews: `${t("reviews")}`,
    write_review: `${t("write-review")}`,
    sku: `${t("sku")}`,
    no_reviews_msg: `${t("no-reviews-msg")}`,
    your_review_title: `${t("your-rev-title")}`,
    your_review: `${t("your-rev")}`,
    show_more: `${t("show-more")}`,
    overview: `${t("overview")}`,
    show_less: `${t("show-less")}`,
    bases_on: `${t("based-on")}`,

  };

  return <SingleProduct data={data} lang={lang} tProduct={tProduct} session={session ? session : null} />
}
