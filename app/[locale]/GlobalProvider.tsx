"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { SiteSettingsProvider } from "@/contexts/SiteSettingsContext";

interface Props {
  children?: React.ReactNode;
}
function GlobalProvider({ children }: Props) {
  return (
    <SessionProvider>
      <SiteSettingsProvider>
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </CartProvider>
      </SiteSettingsProvider>
    </SessionProvider>
  );
}

export default GlobalProvider;
