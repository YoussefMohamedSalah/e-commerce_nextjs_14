import 'bootstrap/dist/css/bootstrap.css';
import "react-loading-skeleton/dist/skeleton.css";
import type { Metadata } from 'next';
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getDirection } from '@/utils/getDirection';
import GlobalProvider from "./GlobalProvider";
import { siteSettings } from "@/components/_data/siteSettings";

import '/public/styles/nice-select.css';
import '/public/styles/responsive.scss';
import '/public/styles/style.scss';
import '/public/styles/variables.scss';
// import '/public/styles/globals.scss';
import '/public/styles/swiper-carousel.css';

import BootstrapClient from './BootstrapClient';
import { Suspense } from 'react';
import MainLoadingScreen from '@/components/common/MainLoadingScreen';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteSettings.url}`),
  title: {
    default: `${siteSettings.name}`,
    template: `${siteSettings.name} | %s`,
  },
  description: `${siteSettings.description}`,
  openGraph: {
    title: `${siteSettings.name}`,
    description: `${siteSettings.description}`,
    url: `${siteSettings.url}`,
    siteName: `${siteSettings.name}`,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: `${siteSettings.name}`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params
}: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body>
        <GlobalProvider>
          <Suspense fallback={<MainLoadingScreen />}>
            {children}
          </Suspense>
        </GlobalProvider>
      </body>
      <BootstrapClient />
    </html>
  );
};
