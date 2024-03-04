"use client";

import HeartSvg from "@/components/svg/heart";
import React, { useContext, useEffect, useState } from "react";
import { SingleProductType, Product } from "@/types/product";
import FavoritesContext from "../../contexts/FavoritesContext";
import { useRouter } from "next/navigation";
import { Session } from "@/types/session";

interface Props {
  product: Product | SingleProductType;
  session: Session | null;
};

export default function ProductHeartBtn({ product, session }: Props) {
  // console.log(product)
  const { id, is_favourite } = product;
  const favoritesContext = useContext(FavoritesContext);
  const { isFavored, toggleItemFavorites } = favoritesContext || {};
  const router = useRouter();

  const [isActive, setIsActive] = useState<boolean>(
    is_favourite ? is_favourite : false
  );

  useEffect(() => {
    if (isFavored) {
      setIsActive(isFavored(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    if (!toggleItemFavorites) return;
    if (!session || !session) {
      return router.push("/login");
    } else {
      setIsActive(!isActive);
      toggleItemFavorites(id, false, session);
    }
  };

  return (
    <span className="add-to-fav float-end" role="button" onClick={handleToggle}>
      <HeartSvg fill={isActive || is_favourite ? "red" : ""} />
    </span>
  );
}
