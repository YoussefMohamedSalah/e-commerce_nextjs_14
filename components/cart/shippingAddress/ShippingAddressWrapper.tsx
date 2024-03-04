import React from 'react'
import ShippingAddressContent from './ShippingAddressContent';
import { useTranslations } from "next-intl";
import { Session } from '@/types/session';

interface Props {
    lang: string;
    session: Session | null;
};

const ShippingAddressWrapper = ({ lang, session }: Props) => {
    const t = useTranslations("Cart");
    const ts = useTranslations("Shipping");

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
        select_address: `${t("select-address")}`,
        street: `${t("street")}`,
        postal_code: `${t("postal-code")}`,
        contact: `${t("contact")}`,
        edit: `${t("edit")}`,
        add_address: `${(t("add-address"))}`,
        remove_address_msg: `${(t("remove-address-msg"))}`,
        yes: `${t("yes")}`,
        no: `${t("no")}`,
        no_addresses_msg: `${(t("no-addresses-msg"))}`,
    };
    const tShipping = {
        add_address: `${ts("add-address")}`,
        edit_address: `${ts("edit-address")}`,
        street_name: `${ts("street-name")}`,
        street_name_holder: `${ts("street-name-holder")}`,
        region_name: `${ts("region-name")}`,
        region_name_holder: `${ts("region-name-holder")}`,
        choose: `${ts("choose")}`,
        city: `${ts("city")}`,
        country: `${ts("country")}`,
        floor: `${ts("floor")}`,
        floor_holder: `${ts("floor-holder")}`,
        building: `${ts("building")}`,
        building_holder: `${ts("building-holder")}`,
        postal_code: `${ts("postal-code")}`,
        postal_code_holder: `${ts("postal-code-holder")}`,
        apartment: `${ts("apartment")}`,
        apartment_holder: `${ts("apartment-holder")}`,
        phone_number: `${ts("phone-number")}`,
        phone_number_holder: `${ts("phone-number-holder")}`,
        notes: `${ts("notes")}`,
        notes_holder: `${ts("notes-holder")}`,
        save: `${ts("save")}`,
        update: `${ts("update")}`
    };

    return <ShippingAddressContent tCart={tCart} lang={lang} tShipping={tShipping} session={session ? session : null} />
};

export default ShippingAddressWrapper;
