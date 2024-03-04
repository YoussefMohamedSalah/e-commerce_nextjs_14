import React from "react";
import MainHeaderMobileNav from "./MainHeaderMobileNav";
import MainHeaderNav from "./MainHeaderNav";
import { useTranslations } from "next-intl";
import { Session } from "@/types/session";

interface Props {
  dropDownData: any;
  mainCategoriesData: any;
  lang: string;
  session: Session | null;
}

export default function MainHeaderMenu({
  dropDownData,
  mainCategoriesData,
  lang,
  session
}: Props) {
  const t = useTranslations("Header");
  let allCategoriesText = t("menu-all-categories");

  const topMenu = [
    {
      id: 1,
      path:
        "/products?search=&page=1&per_page=12&orderBy=created_at&orderType=desc&price_from=&price_to=",
      label: `${t("menu-whats-new")}`
    },
    {
      id: 2,
      path: "/blogs",
      label: `${t("menu-blog")}`
    },
    {
      id: 3,
      path: "/about-us",
      label: `${t("menu-about-us")}`
    },
    {
      id: 4,
      path: "/contact-us",
      label: `${t("menu-contact-us")}`
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-md-0">
        <MainHeaderMobileNav data={dropDownData} lang={lang} session={session ? session : null} />
        <MainHeaderNav
          dropDownData={dropDownData}
          mainCategoriesData={mainCategoriesData}
          allCatText={allCategoriesText}
          topMenu={topMenu}
        />
      </div>
    </nav>
  );
}
