import React from 'react';
import Complaints from '@/components/myAccount/Complaints';
import { authConfig } from '@/lib/auth';
import { getServerSession } from "next-auth/next";

interface Props {
  params: { locale: string };
};

export const metadata = {
  title: 'Complaints',
  description: 'Page Description',
};

export default async function ComplaintsPage({ params: { locale } }: Props) {
  const session = await getServerSession(authConfig);
  const { name } = session?.user!;
  return <Complaints name={name} />
}
