import React from "react";
import ShoppingCart from "./ShoppingCart";
import MobileLangSwitcher from "./MobileLangSwitcher";
import AuthMenu from "./AuthMenu";
import { Session } from "@/types/session";
import HeaderToggleMobileMenuBtn from "./HeaderToggleMobileMenuBtn";

interface Props {
  data: any;
  lang: string;
  session: Session | null;
};

export default async function MainHeaderMobileNav({ data, lang, session }: Props) {

  return (
    <div className="mobile-user-nav d-md-none d-flex align-items-center">
      <ul className="user-nav list-inline mb-0">
        <MobileLangSwitcher fillColor={'white'} lang={lang} />
        <AuthMenu fillColor={'white'} />
        <ShoppingCart fillColor={'white'} session={session ? session : null} />
      </ul>
      <HeaderToggleMobileMenuBtn />
    </div>
  );
}
