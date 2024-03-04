import PaymentMethodWrapper from "@/components/cart/paymentMethod/PaymentMethodWrapper";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { Session } from "@/types/session";
import { getServerSession } from "next-auth";
import React from "react";

interface Props {
    params: { locale: string };
};

export const metadata = {
    title: "Payment Method",
    description: "Page Description"
};

export default async function PaymentMethodPage({ params: { locale } }: Props) {
    const session: Session | null = await getServerSession(authConfig);
    await loginIsRequiredServer();

    return <PaymentMethodWrapper lang={locale} session={session ? session : null} />;
}
