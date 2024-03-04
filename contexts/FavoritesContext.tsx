import { BASE_API_URL } from "@/constants/baseUrl";
import { FavoriteItem } from "@/types/cart";
import { Session } from "@/types/session";
import React, { useState, useEffect, ReactNode } from "react";

interface FavoriteProviderProps {
  children?: ReactNode;
};

interface CartContextType {
  favorites: any[] | null;
  toggleItemFavorites: (id: number, reFetch: boolean, session: Session) => void;
  isFavored: (id: number) => boolean;
  fetchFavorites: (session: Session) => any;
};

export const FavoritesContext = React.createContext<
  CartContextType | undefined
>(undefined);

export const FavoritesProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<any[] | null>(null);

  const fetchFavorites = async (session: Session) => {
    if (!session) return null;

    try {
      const favoritesUrl = `${BASE_API_URL}/profile/favourites`;
      const res = await fetch(`${favoritesUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token!}`
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch favorites from the server");
      }

      const data = await res.json();
      setFavorites(data.data.data || []); // Set favorites state directly
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  // Server Actions
  const toggleItemFavoritesServer = async (id: number, session: Session) => {
    if (!session) return;

    try {
      let res = await fetch(`${BASE_API_URL}/fav/toggle_fav`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token!}`
        },
        body: JSON.stringify({ product_id: id })
      });

      if (!res.ok) {
        throw new Error("Failed to toggle favorite on the server");
      }

    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const toggleItemFavorites = async (id: number, reFetch = false, session: Session) => {
    // Server Actions
    await toggleItemFavoritesServer(id, session);

    if (reFetch) {
      fetchFavorites(session);
    }
  };

  const isFavored = (id: number): boolean => {
    if (favorites) {
      const isItemExist = favorites?.find((i) => i.id === id);
      return isItemExist ? true : false;
    } else return false
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleItemFavorites,
        isFavored,
        fetchFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
