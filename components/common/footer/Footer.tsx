import React from "react";
import { footer } from "./data";
import FooterWidgets from "./FooterWidgets";
import FooterCopyRights from "./FooterCopyRights";
import { commonService } from "@/services/common.service";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

interface Props {
  lang: string;
};

async function getFooterCategories(lang: string) {
  const response = await commonService.getFooterCategories(lang);
  if (response && response.success) {
    return response.data;
  }
};

async function getSiteSettings(lang: string) {
  const response = await commonService.getSiteSettings(lang);
  if (response && response.success) {
    return response.data;
  }
};

export default async function Footer({ lang }: Props) {
  const session: Session | null = await getServerSession(authConfig);
  const { payment } = footer;
  const fCategories = await getFooterCategories(lang);

  return (
    <footer id="footer-limit">
      <div className="footer-wrapper">
        <FooterWidgets widgets={fCategories} session={session ? session : null} />
      </div>
      <FooterCopyRights payment={payment} />
    </footer>
  );
}
