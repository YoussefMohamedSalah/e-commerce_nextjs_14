import React from "react";
import Wallet from "@/components/myAccount/wallet/Wallet";
import { walletService } from "@/services/wallet.service";

interface Props {
  params: { locale: string };
};

export const metadata = {
  title: "Wallet",
  description: "Page Description"
};

async function getAllWallets(lang: string) {
  const response = await walletService.getAllWallets(lang);
  if (response && response.success) {
    return response.data;
  }
};

export default async function MyWalletPage({ params: { locale } }: Props) {
  const walletsData = await getAllWallets(locale);

  return <Wallet data={walletsData} />;
};
