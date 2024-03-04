import { useTranslations } from "next-intl";
import SideNavWrapper from "./SideNavWrapper";

export default function SideNav() {
  const t = useTranslations("Account");
  const sideNavT: any = {
    side_account: `${t("side-account")}`,
    side_profile: `${t("side-profile")}`,
    side_wallet: `${t("side-wallet")}`,
    side_orders: `${t("side-orders")}`,
    side_complaints: `${t("side-complaints")}`,
    side_favorites: `${t("side-favorites")}`,
    side_logout: `${t("side-logout")}`
  };

  return (
    <SideNavWrapper sideNavT={sideNavT} />
  );
};
