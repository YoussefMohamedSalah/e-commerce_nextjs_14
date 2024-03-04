"use client";
import ShoppingCartIcon from "@/components/svg/shoppingCart";
import Link from "@/components/ui/link";
import CartContext from "@/contexts/CartContext";
import { Session } from "@/types/session";
import React, { useContext, useEffect, useState } from "react";

interface Props {
  fillColor?: string;
  session: Session | null;
};

export default function ShoppingCart({ fillColor, session }: Props) {
  const [initialized, setInitialized] = useState<boolean>(false);
  const cartContext = useContext(CartContext);
  const { fetchCartItems, cart } = cartContext || {};
  let cartItemsCount = cart && cart?.length > 0 ? cart.length : 0


  const handleGetCart = async () => {
    if (fetchCartItems && session) {
      await fetchCartItems(session);
    }
  }

  useEffect(() => {
    if (!initialized && fetchCartItems) {
      handleGetCart();
      setInitialized(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <li className="list-inline-item">
      <Link href={session ? '/cart' : '/login'}>
        <ShoppingCartIcon fill={fillColor ? fillColor : "#292D32"} />
        {session && (
          <span>
            {cartItemsCount}
          </span>
        )}
      </Link>
    </li>
  );
}
