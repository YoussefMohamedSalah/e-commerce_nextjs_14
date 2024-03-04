import React from "react";
import EditPersonalInfoBtn from "./EditPersonalInfoBtn";
import { Session } from "@/types/session";
import { useTranslations } from "next-intl";
import PersonalInfoModal from "./PersonalInfoModal";

interface Props {
  session: Session | null;
  tProfile: any;
  lang: string;
};

export default function PersonalInfo({ tProfile, lang, session }: Props) {
  const t = useTranslations("Account");
  const { name, email, phone } = session?.user!;

  return (
    <div className="border rounded10 p-3 mb-3">
      <div className="d-flex justify-content-between align-items-center gap-3 mb-2rem">
        <div className="fz16 text-black fw-600">
          {t("personal-info")}
        </div>
        <EditPersonalInfoBtn editT={`${t("edit")}`} />
      </div>
      <div className="row">
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">{t("name")}</div>
          <div className="text-helper">{name}</div>
        </div>
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">{t("phone")}</div>
          <div className="text-helper">{phone}</div>
        </div>
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">{t("email-address")}</div>
          <div className="text-helper">{email}</div>
        </div>
        <div className="col-md-6 mb-2rem">
          <div className="text-black fw-600 mb-2">{t("password")}</div>
          <div className="text-helper">**********</div>
        </div>
      </div>
      <PersonalInfoModal userInfo={session?.user!} tProfile={tProfile} lang={lang} session={session ? session : null} />
    </div>
  );
}
