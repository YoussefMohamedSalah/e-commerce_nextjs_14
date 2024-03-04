import React from "react";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Profile from "@/components/myAccount/profile/Profile";
import { Session } from "@/types/session";

interface Props {
  params: { locale: string };
};

export const metadata = {
  title: "Account",
  description: "Page Description"
};

export default async function MyAccountPage({ params: { locale } }: Props) {
  const session: Session | null = await getServerSession(authConfig);

  return <Profile session={session} lang={locale} />;
};
