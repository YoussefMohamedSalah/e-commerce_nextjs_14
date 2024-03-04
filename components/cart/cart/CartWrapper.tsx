import React from "react";
import CartContent from "./CartContent";
import { useTranslations } from "next-intl";
import { Session } from "@/types/session";

interface Props {
  lang: string;
  session: Session | null;
};

export default function CartWrapper({ lang, session }: Props) {
  const t = useTranslations("Cart");

  const tCart = {
    your_cart: `${t("your-cart")}`,
    remove: `${t("remove")}`,
    order_summary: `${t("order-summary")}`,
    price: `${t("price")}`,
    discount: `${t("discount")}`,
    total: `${t("total")}`,
    continue_to_shipping: `${t("continue-to-shipping")}`,
    continue_to_payment: `${t("continue-to-payment")}`,
    cart_empty: `${t("cart-empty")}`,
    explore_deals: `${t("explore-deals")}`,
    estimated_delivery: `${t("estimated-delivery")}`,
    apply: `${t("apply")}`,
    coupon_code: `${t("coupon-code")}`,
    shipping: `${t("shipping")}`,
  };

  return <CartContent tCart={tCart} lang={lang} session={session} />;
}
