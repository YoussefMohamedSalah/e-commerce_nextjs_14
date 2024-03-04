import React, { useState } from "react";
import AuthAside from "@/components/auth/AuthAside";
import { useTranslations } from "next-intl";
import NewPassword from "@/components/auth/ForgetPassword/NewPassword";

export const metadata = {
	title: "New Password",
	description: "Page Description"
};

interface Props {
	params: { locale: string };
}

export default function NewPasswordPage({ params: { locale } }: Props) {
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
		set_new_password: `${t("set-new-password")}`,
		new_password_msg: `${t("new-password-msg")}`,
		reset: `${t("reset")}`
	};

	return (
		<main>
			<div className="create-account-container">
				<div className="container-fluid">
					<div className="row">
						<AuthAside
							className={"col-md-5"}
							text={`${t("auth-side-msg")}`}
						/>
						<NewPassword className={"col-md-7"} tAuth={tAuth} lang={locale} />
					</div>
				</div>
			</div>
		</main>
	);
}
