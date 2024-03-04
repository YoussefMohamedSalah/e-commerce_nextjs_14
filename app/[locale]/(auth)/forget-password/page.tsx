import React, { useState } from "react";
import AuthAside from "@/components/auth/AuthAside";
import { useTranslations } from "next-intl";

import ForgetPassword from "@/components/auth/ForgetPassword/ForgetPassword";

export const metadata = {
  title: "Forget Password",
  description: "Page Description"
};

interface Props {
  params: { locale: string };
}

export default function ForgetPasswordPage({ params: { locale } }: Props) {
  const t = useTranslations("Auth");

  return (
    <main>
      <div className="create-account-container">
        <div className="container-fluid">
          <div className="row">
            <AuthAside
              className={"col-md-5"}
              text={`${t("auth-side-msg")}`}
            />
            <ForgetPassword className={"col-md-7"} lang={locale} />
          </div>
        </div>
      </div>
    </main>
  );
}
