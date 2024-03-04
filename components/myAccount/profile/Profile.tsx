import React from "react";
import PersonalInfo from "./PersonalInfo";
import { Session } from "@/types/session";
import { useTranslations } from "next-intl";

interface Props {
	session: Session | null;
	lang: string;
};

export default function Profile({ session, lang }: Props) {
	const t = useTranslations("Account");

	const tProfile = {
		edit: `${t("edit")}`,
		edit_profile_info: `${t("edit-profile-info")}`,
		save: `${t("save")}`,
		first_name: `${t("first-name")}`,
		first_name_holder: `${t("first-name-holder")}`,
		last_name: `${t("last-name")}`,
		last_name_holder: `${t("last-name-holder")}`,
		password: `${t("password")}`,
		confirm_password: `${t("confirm-password")}`,
		email: `${t("email-address")}`,
		email_holder: `${t("email-holder")}`,
		change_password: `${t("change-password")}`,
		phone_number: `${t("phone-number")}`,
		phone_number_holder: `${t("phone-number-holder")}`,
		update: `${t("update")}`,
		retype: `${t("retype")}`,
		your_new_password: `${t("your-new-password")}`,
		your_current_password: `${t("your-current-password")}`,
	};

	return (
		<>
			<div className="col-lg-9">
				<div className="profile-wrapper pt-4">
					<div className="fz20 fw-600 text-black mb-3">{t('welcome')} {session?.user?.name!}</div>
					<div className="fz14 text-secondary mb-3">
						{t('manage-account')}
					</div>
					<PersonalInfo session={session} tProfile={tProfile} lang={lang} />
				</div>
			</div>
		</>
	);
}
