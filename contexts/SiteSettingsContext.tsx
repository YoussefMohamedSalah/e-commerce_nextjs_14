"use client";

import { getSiteSettings } from "@/utils/getSiteSettings";
import React, { useState, useEffect, ReactNode } from "react";

interface SiteSettingsProviderProps {
  children?: ReactNode;
}

interface SiteContextType {
  siteSettings: StoreData | null;
}

export interface StoreData {
  about: string;
  delivery_days: string;
  free_return: string;
  header_message: string;
  icon: string;
  light_logo: string;
  logo: string;
  name: string;
  order_type: string;
  privacy: string;
  refund: string;
  shipping_fee: string;
  small_logo: string;
  tax: string;
  terms: string;
  whatsapp_message: string;
  whatsapp_number: string;
}

export const SiteSettingsContext = React.createContext<
  SiteContextType | undefined
>(undefined);

export const SiteSettingsProvider = ({
  children
}: SiteSettingsProviderProps) => {
  const [siteSettings, setSiteSettings] = useState<StoreData | null>(null);

  useEffect(() => {
    setSiteSettingsToState();
  }, []);

  const setSiteSettingsToState = async () => {
    const response = await getSiteSettings();
    setSiteSettings(response.data);
  };

  return (
    <SiteSettingsContext.Provider
      value={{
        siteSettings
      }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
};

export default SiteSettingsContext;
