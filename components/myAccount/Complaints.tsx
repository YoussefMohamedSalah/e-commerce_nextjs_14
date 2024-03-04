import React from 'react';
import { useTranslations } from "next-intl";
import ComplaintsForm from './ComplaintsForm';

interface Props {
	name: string;
};

export default function Complaints({ name }: Props) {
	const t = useTranslations("Account");

	const tAccount = {
		subject: `${t("subject")}`,
		message_title: `${t("message-title")}`,
		your_message: `${t("your-message")}`,
		what_to_say: `${t("what-to-say")}`,
		submit: `${t("submit")}`
	}


	return (
		<>
			<div className="col-lg-9">
				<div className="profile-wrapper pt-4">
					<div className="fz20 fw-600 text-black mb-3">{t("welcome")} {name}</div>
					<div className="fz14 text-secondary mb-3">{t("manage-account")}
					</div>
					<div className="fz16 fw-600 text-primary my-4">{t("love-to-hear")} </div>
					<ComplaintsForm tAccount={tAccount} />
				</div>
			</div>
		</>
	)
}
