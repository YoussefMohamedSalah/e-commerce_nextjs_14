import CartWrapper from "@/components/cart/cart/CartWrapper";
import { loginIsRequiredServer } from "@/lib/auth";
import React from "react";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

interface Props {
  params: { locale: string };
};

export const metadata = {
  title: "Cart",
  description: "Page Description"
};

export default async function CartPage({ params: { locale } }: Props) {
  const session: Session | null = await getServerSession(authConfig);

  await loginIsRequiredServer();

  return <CartWrapper lang={locale} session={session} />;
}
