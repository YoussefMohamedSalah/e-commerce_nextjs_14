"use client"
import React, { useContext, useEffect, useState } from 'react';
import FavoritesProductCard from './FavoritesProductCard';
import { PAGES } from '@/constants/pages';
import FavoritesContext from '@/contexts/FavoritesContext';
import NoFavoriteProductsMessage from './NoFavorites';
import { Session } from '@/types/session';

interface Props {
  tFavorites: any;
  tAction: any;
  session: Session | null;
};

export default function FavoritesWrapper({ tFavorites, tAction, session }: Props) {
  const favoritesContext = useContext(FavoritesContext);
  const [initialized, setInitialized] = useState<boolean>(false);
  const { favorites, fetchFavorites } = favoritesContext || {};

  useEffect(() => {
    if (!initialized && session && fetchFavorites) {
      fetchFavorites(session)
      setInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {favorites ? (<>
        <div className="fz16 fw-600 text-primary mt-4 mb-2rem">{tFavorites.saved_items}
          {favorites.length > 0 && (
            <small className="bg-secondary rounded50 px-3 py-1 ms-3">{favorites.length}</small>
          )}
        </div>
        {favorites?.length! > 0 ? (
          <>
            <div className="cart-items-wrapper">
              {favorites.map((product: any) => {
                return (
                  <FavoritesProductCard
                    key={`product--key-${product.id}`}
                    item={product}
                    href={PAGES.PRODUCTS + "/" + product.slug}
                    tAction={tAction}
                    session={session ? session : null}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <NoFavoriteProductsMessage title={tFavorites.no_favorites_title} />
        )}
      </>) : (<>
        loading...
      </>)}
    </>
  )
}
