import ThanksForYourOrderWrapper from "@/components/cart/thanksForYourOrder/ThanksForYourOrderWrapper";
import { loginIsRequiredServer } from "@/lib/auth";
import React from "react";

export const metadata = {
    title: "Thanks for your order",
    description: "Page Description"
};

export default async function ThanksPage() {
    await loginIsRequiredServer();

    return <ThanksForYourOrderWrapper />;
}
