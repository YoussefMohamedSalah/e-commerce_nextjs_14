import React from 'react';
import { getServerSession } from "next-auth/next";
import { orderService } from "@/services/order.service";
import Orders from '@/components/myAccount/orders/Orders';
import { authConfig } from '@/lib/auth';

interface Props {
  params: { locale: string };
};

export const metadata = {
  title: 'Orders',
  description: 'Page Description',
};

async function getOrders(lang: string) {
  const response = await orderService.getAllOrders(lang);
  if (response && response.success) {
    return response.data;
  }
};

export default async function MyOrdersPage({ params: { locale } }: Props) {
  const session = await getServerSession(authConfig);
  const { name } = session?.user!;
  const ordersItems = await getOrders(locale);

  return <Orders data={ordersItems} name={name} />
};
