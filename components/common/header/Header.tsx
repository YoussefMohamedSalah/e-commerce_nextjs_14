import React from "react";
import { siteSettings } from "@/components/_data/siteSettings";
import HeaderTopMenu from "./HeaderTopMenu";
import HeaderIconsMenu from "./HeaderIconsMenu";
import Logo from "../Logo";
import LogoSmall from "../LogoSmall";
import DealsBar from "./DealsBar";
import MainHeaderMenu from "./MainHeaderMenu";
import { commonService } from "@/services/common.service";
import SearchWrapper from "./SearchWrapper";
import Container from "@/components/ui/container";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

interface Props {
  lang: string;
};

async function getSiteSettings(lang: string) {
  const response = await commonService.getSiteSettings(lang);
  if (response && response.success) {
    return response.data;
  }
};

// --Header
async function getCategoriesLinks(lang: string) {
  const response = await commonService.getCategoriesLinks(lang);
  if (response && response.success) {
    return response.data;
  }
};

async function getHeaderMainCategoriesLinks(lang: string) {
  const response = await commonService.getHeaderMainCategoriesLinks(lang);
  if (response && response.success) {
    return response.data;
  }
};

export default async function Header({ lang }: Props) {
  const session: Session | null = await getServerSession(authConfig);
  const { site_header } = siteSettings;
  const siteSettingsData = await getSiteSettings(lang);
  // Header
  const hCategories = await getCategoriesLinks(lang);
  const hMainCategories = await getHeaderMainCategoriesLinks(lang);

  return (
    <header>
      <DealsBar data={siteSettingsData} />
      <div className="main-header-content">
        <Container>
          <div className="d-flex align-items-center">
            <Logo />
            <div className="header-main-content d-flex justify-content-between gap-5 flex-grow-1 align-items-center">
              <HeaderTopMenu
                data={site_header.topMenu}
                className="header-mini-nav list-unstyled mb-0"
              />
              <LogoSmall />
              <SearchWrapper />
              <ul className="user-nav list-inline mb-0 flex-shrink-0 d-none d-md-flex">
                <HeaderIconsMenu lang={lang} session={session ? session : null} />
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="main-menu px-8">
          <MainHeaderMenu
            dropDownData={hCategories}
            mainCategoriesData={hMainCategories}
            lang={lang}
            session={session ? session : null}
          />
        </div>
      </Container>
    </header>
  );
};
