import ShippingAddressWrapper from "@/components/cart/shippingAddress/ShippingAddressWrapper";
import { loginIsRequiredServer } from "@/lib/auth";
import React from "react";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

interface Props {
	params: { locale: string };
}

export const metadata = {
	title: "Shipping address",
	description: "Page Description"
};

export default async function ShippingAddressPage({ params: { locale } }: Props) {
	const session: Session | null = await getServerSession(authConfig);
	await loginIsRequiredServer();

	return <ShippingAddressWrapper lang={locale} session={session ? session : null} />;
}
