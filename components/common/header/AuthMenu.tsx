import React from "react";
import UserAddIcon from "@/components/svg/userAdd";
import LoginOneIcon from "@/components/svg/login1";
import Link from "@/components/ui/link";
import UserIcon from "@/components/svg/user";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import { PAGES } from "@/constants/pages";
import BlackHeartSvg from "@/components/svg/blackHeart";
import WalletIcon from "@/components/svg/wallet";
import ReceptIcon from "@/components/svg/recept";
import LogoutBtnClient from "./logoutBtnClient";

interface Props {
  fillColor?: string;
};

export default async function AuthMenu({ fillColor }: Props) {
  const t = useTranslations("Account");

  let logoutText = `${t("side-logout")}`

  const session = await getServerSession(authConfig);
  return (
    <li className="list-inline-item">
      {session
        ? <>
          <div className="dropdown">
            <a
              href="#"
              data-bs-display="static"
              role="button"
              data-bs-toggle="dropdown"
            >
              <UserIcon fill={fillColor ? fillColor : "#292D32"} />
            </a>
            <ul className="dropdown-menu p-0">
              <li className="dropdown-item py-2">
                <Link className="p-0 dropdown-item pointer position-relative d-flex ms-auto" href={PAGES.PROFILE} >
                  <UserIcon fill={"#292D32"} className="mx-1" />
                  {t("side-profile")}
                </Link>
              </li>
              <li className="dropdown-item py-2">
                <Link className="p-0 dropdown-item pointer position-relative d-flex ms-auto" href={PAGES.ORDERS} >
                  <ReceptIcon fill={"#292D32"} className="mx-1" />
                  {t("side-orders")}
                </Link>
              </li>
              <li className="dropdown-item py-2">
                <Link className="p-0 dropdown-item pointer position-relative d-flex ms-auto" href={PAGES.WALLET} >
                  <WalletIcon fill={"#292D32"} className="mx-1" />
                  {t("side-wallet")}
                </Link>
              </li>
              <li className="dropdown-item py-2">
                <Link className="p-0 dropdown-item pointer position-relative d-flex ms-auto" href={PAGES.FAVORITES} >
                  <BlackHeartSvg fill={"#292D32"} className="mx-1" />
                  {t("side-favorites")}
                </Link>
              </li>
              <LogoutBtnClient logoutText={logoutText} />
            </ul>
          </div>
        </>
        : <div className="dropdown">
          <a
            href="#"
            data-bs-display="static"
            role="button"
            data-bs-toggle="dropdown"
          >
            <UserIcon />
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item pointer position-relative d-flex ms-auto" href="/login">
                <LoginOneIcon className="mx-1" />
                {t("login")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item pointer position-relative d-flex ms-auto" href="/signup">
                <UserAddIcon className="mx-1" />
                {t("signup")}
              </Link>
            </li>
          </ul>
        </div>}
    </li>
  );
}

// logoutText