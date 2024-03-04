import React from "react";
import ForgetPasswordForm from "./ForgetPassword/ForgetPasswordForm";
import FingerPrint from "@/components/svg/fingerPrint";
import cn from "classnames";
import { useTranslations } from "next-intl";


interface ForgetPasswordProps {
  className?: string;
  lang: string;
};

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ className, lang }) => {
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
    redirected_message: `${t("redirected-message")}`,
    forget_password_msg: `${t("reset-password-msg")}`,
    enter_email: `${t("enter-email")}`,
    send: `${t("send")}`,
  };
  return (
    <div className={cn(className)}>
      <div className="form-wrapper asides-gap">
        <FingerPrint />
        <div className="text-primary fz24 mb-3">{tAuth.forget_password}</div>
        <div className="fz14 text-black-50 mb-3">
          {tAuth.forget_password_msg}
        </div>
        <ForgetPasswordForm tAuth={tAuth} lang={lang} />
      </div>
    </div>
  );
};

export default ForgetPassword;
