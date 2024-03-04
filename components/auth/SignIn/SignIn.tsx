import React from "react";
import cn from "classnames";
import Link from "@/components/ui/link";
import SocialAuth from "../SocialAuth";
import SignInForm from "./SignInForm";
import { PAGES } from "@/constants/pages";
import { useTranslations } from "next-intl";

interface SignUpProps {
  className?: string;
  lang: string;
}

export default async function SignIn({ className, lang }: SignUpProps) {
  const t = useTranslations("Auth");

  const tAuth = {
    login: `${t("login")}`,
    forget_password: `${t("forget-password")}`,
    email: `${t("email")}`,
    password: `${t("password")}`
  };

  return (
    <div className={cn(className)}>
      <div className="form-wrapper asides-gap ">
        <div className="text-primary fz24 mb-3">
          {t("login")}
        </div>
        <div className="fz14 text-black-50 mb-3">
          {t("do-not-have-account")}
          <Link href={PAGES.SIGN_UP} className="fw-500 text-blue hover-link">
            {t("create-account")}
          </Link>
        </div>
        <SocialAuth />
        <div className="or text-secondary fz14">
          {" "}{t("or")}
        </div>
        <SignInForm tAuth={tAuth} lang={lang} />
      </div>
    </div>
  );
}
