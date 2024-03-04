import Container from "@/components/ui/container";
import React from "react";
import ContactUs from "@/components/contactUs/contactUs";
import { commonService } from "@/services/common.service";

interface Props {
  params: { locale: string };
};

export const metadata = {
  title: "About Us",
  description: "Page Description"
};

async function getSiteSettings(lang: string) {
  const response = await commonService.getSiteSettings(lang);
  if (response && response.success) {
    return response.data;
  }
}

export default async function ContactUsPage({ params: { locale } }: Props) {
  const siteSettingsData = await getSiteSettings(locale);

  return (
    <main>
      <Container>
        <ContactUs data={siteSettingsData} />
      </Container>
    </main>
  );
}
