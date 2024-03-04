import React from "react";
import cn from "classnames";
import SignUpForm from "./SignUpForm";
import { useTranslations } from "next-intl";

interface SignUpProps {
  className?: string;
  lang: string;
}

const SignUp: React.FC<SignUpProps> = async ({ className, lang }) => {
  const t = useTranslations("Auth");
  const tAuth = {
    login: `${t("login")}`,
    auth_side_msg: `${t("auth-side-msg")}`,
    f_name: `${t("f-name")}`,
    f_name_ex: `${t("f-name-ex")}`,
    l_name: `${t("l-name")}`,
    l_name_ex: `${t("l-name-ex")}`,
    email: `${t("email")}`,
    password: `${t("password")}`,
    confirm_password: `${t("confirm-password")}`,
    signup_agreement: `${t("signup-agreement")}`,
    terms_of_use: `${t("terms-of-use")}`,
    have_account: `${t("have-account")}`,
    create_account: `${t("create-account")}`,
    activate_account: `${t("activate-account")}`,
    we_send_code: `${t("we-send-code")}`,
    do_not_receive_code: `${t("do-not-receive-code")}`,
    back_to_login: `${t("back-to-login")}`,
    do_not_have_account: `${t("do-not-have-account")}`,
    forget_password: `${t("forget-password")}`,
    or: `${t("or")}`,
    continue: `${t("continue")}`,
    resend_in: `${t("resend-in")}`,
    seconds: `${t("seconds")}`,
    resend_code: `${t("resend-code")}`,
    all_done: `${t("all-done")}`,
    activated_account: `${t("activated-account")}`,
    redirected_message: `${t("redirected-message")}`
  };

  return (
    <div className={cn(className)}>
      <SignUpForm tAuth={tAuth} lang={lang} />
    </div>
  );
};

export default SignUp;
