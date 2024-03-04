import React from 'react';
import AboutUsGrid from '@/components/about/aboutUsGrid';
import OurTeam from '@/components/about/ourTeam';
import Timeline from '@/components/about/timeline';
import Container from '@/components/ui/container';
import { commonService } from '@/services/common.service';

interface Props {
  params: { locale: string };
}

export const metadata = {
  title: 'About Us',
  description: 'Page Description',
};

async function getSiteSettings(lang: string) {
  const response = await commonService.getSiteSettings(lang);
  if (response && response.success) {
    return response.data;
  }
}

export default async function AboutUsPage({ params: { locale } }: Props) {
  const siteSettingsData = await getSiteSettings(locale);

  return (
    <>
      <AboutUsGrid />
      <OurTeam />
      <Timeline />
    </>
  )
}
