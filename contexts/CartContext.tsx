import { CartItem } from "@/types/cart";
import React, { useState, useEffect, ReactNode } from "react";
import { BASE_API_URL } from "@/constants/baseUrl";
import { Session } from "@/types/session";

interface CartProviderProps {
  children?: ReactNode;
};

interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem, session: Session) => any;
  deleteItemFromCart: (id: number, reFetch: boolean, session: Session) => void;
  changeQuantity: (id: number, quantity: number, session: Session) => void;
  isInCart: (id: number) => boolean;
  fetchCartItems: (session: Session) => any
};

export const CartContext = React.createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  const setCartToState = (newCart: CartItem[]) => {
    setCart(newCart);
  };

  const fetchCartItems = async (session: Session) => {
    if (!session) return null;

    try {
      const favoritesUrl = `${BASE_API_URL}/cart`;
      const res = await fetch(`${favoritesUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token!}`
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch cart");
      }

      const data = await res.json();
      setCartToState(data.data.data || []); // Set Cart state directly
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const addItemToCartServer = async (
    product_id: number,
    product_options = [],
    quantity: number,
    session: Session
  ) => {
    const data = { product_id, product_options, quantity };
    if (!session) return null;

    try {
      const response = await fetch(`${BASE_API_URL}/cart/item/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token!}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to Add Item To Cart");
      }

      const result = await response.json();
      fetchCartItems(session); // Fetch updated cart items after adding
      return result
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const deleteItemFromCartServer = async (id: number, session: Session) => {
    if (!session) return null;

    try {
      const response = await fetch(`${BASE_API_URL}/cart/item/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token!}`
        },
      });

      if (!response.ok) {
        throw new Error("Failed to Delete Item From Cart");
      }

      const result = await response.json();
      fetchCartItems(session); // Fetch updated cart items after deletion
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const updateCartItemQuantityServer = async (id: number, quantity: number, session: Session) => {
    if (!session) return null;

    try {
      const response = await fetch(`${BASE_API_URL}/cart/item/quantity/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token!}`
        },
        body: JSON.stringify({
          cart_id: id,
          quantity: quantity
        })
      });

      if (!response.ok) {
        throw new Error("Failed to Update Cart Item Quantity");
      }

      const result = await response.json();
      fetchCartItems(session); // Fetch updated cart items after updating quantity
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const addItemToCart = async (item: CartItem, session: Session) => {
    let res = addItemToCartServer(item.id, [], item.quantity, session);
    return res
  };

  const deleteItemFromCart = async (id: number, reFetch = false, session: Session) => {
    await deleteItemFromCartServer(id, session);
    if (reFetch) {
      await fetchCartItems(session);
    }
  };

  const changeQuantity = async (id: number, quantity: number, session: Session) => {
    updateCartItemQuantityServer(id, quantity, session);
  };

  const isInCart = (id: number): boolean => {
    if (typeof window !== "undefined") {
      let localeCart = localStorage.getItem("cart");

      if (localeCart) {
        let cartItems = JSON.parse(localeCart);

        const isItemExist = cartItems.find((i: any) => {
          return i.product.id === id;
        });

        return isItemExist ? true : false;
      } else {
        return false;
      }
    } else {
      return false;
    }

  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        changeQuantity,
        isInCart,
        fetchCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
