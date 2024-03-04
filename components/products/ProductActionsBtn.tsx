"use client";

import React, { useContext, useState } from "react";
import dynamic from 'next/dynamic';
import { SingleProductType } from "@/types/product";
import CartContext from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { CartItem } from "@/types/cart";
import { Session } from "@/types/session";

const AddToCartBtn = dynamic(() => import('../../components/common/AddToCartBtn'))

interface Props {
  product: SingleProductType;
  tProduct: any;
  session: Session | null;
};

export default function ProductActionsBtn({ product, tProduct, session }: Props) {
  const [quantity, setQuantity] = React.useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cartContext = useContext(CartContext);
  const { addItemToCart, isInCart } = cartContext || {};
  const router = useRouter();


  const handleBuyNow = async () => {
    if (!session || !session) return router.push('/login');
    if (isInCart && isInCart(product?.id!)) return router.push('/cart');

    const productToAdd: CartItem = {
      id: product.id,
      quantity: quantity || 1,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        media: product.media,
        stock: product.stock
      },
      price: product.price,
      item_total: product.price
    };

    if (addItemToCart && session) {
      setIsLoading(true);
      let res = await addItemToCart(productToAdd, session);
      if (res) {
        setIsLoading(false);
        return router.push('/cart');
      }
    }
  }

  return (
    <div className="quantity-wrapper">
      <strong className="fz14 fw-600 mb-3 d-block">
        {tProduct.quantity}
      </strong>

      <div className="d-flex justify-content-between gap-4">
        <div className="quantity-select d-flex justify-content-center align-items-center">
          <select
            disabled={!product.stock}
            className="nice-select"
            onChange={e => setQuantity(Number(e.target.value))}
            style={{
              backgroundColor: "transparent",
              margin: "0px 15px 0px 15px"
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty =>
              <option key={`key-${qty}`} value={qty}>
                {qty}
              </option>
            )}
          </select>
        </div>

        <AddToCartBtn
          product={product}
          quantity={quantity}
          tProduct={tProduct}
          session={session ? session : null}
        />
        <button onClick={handleBuyNow} className="btn btn-outline-primary rounded10 buy-now-btn" disabled={!product.stock}>
          {isLoading ? <div className="spinner-border" style={{ width: "1.29rem", height: "1.29rem" }} role="status" /> : <p style={{ margin: 0 }}>{tProduct.buy_now}</p>}
        </button>
      </div>
    </div>
  );
}
