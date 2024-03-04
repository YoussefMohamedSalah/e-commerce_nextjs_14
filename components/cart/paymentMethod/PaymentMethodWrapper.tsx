import React from 'react'
import PaymentMethodContent from './PaymentMethodContent';
import { useTranslations } from "next-intl";
import { Session } from "@/types/session";

interface Props {
    lang: string;
    session: Session | null;
};

const PaymentMethodWrapper = ({ lang, session }: Props) => {
    const t = useTranslations("Cart");
    const ts = useTranslations("Shipping");

    const tCart = {
        your_cart: `${t("your-cart")}`,
        remove: `${t("remove")}`,
        order_summary: `${t("order-summary")}`,
        price: `${t("price")}`,
        discount: `${t("discount")}`,
        total: `${t("total")}`,
        cart_empty: `${t("cart-empty")}`,
        explore_deals: `${t("explore-deals")}`,
        estimated_delivery: `${t("estimated-delivery")}`,
        apply: `${t("apply")}`,
        coupon_code: `${t("coupon-code")}`,
        shipping: `${t("shipping")}`,
        pay_now: `${t("pay-now")}`,
    };

    const tShipping = {
        pick_payment_method: `${ts("pick-payment-method")}`,
        payments_are_safe: `${ts("payments-are-safe")}`,
    };

    return <PaymentMethodContent tCart={tCart} tShipping={tShipping} lang={lang} session={session ? session : null} />
}

export default PaymentMethodWrapper
