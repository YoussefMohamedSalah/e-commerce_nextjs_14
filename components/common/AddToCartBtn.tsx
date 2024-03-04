import CartContext from '@/contexts/CartContext';
import { CartItem } from '@/types/cart';
import Link from '../ui/link';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Session } from '@/types/session';

interface Props {
    product: any;
    quantity?: number;
    tProduct: any;
    session: Session | null;
};

export default function AddToCartBtn({ product, quantity, tProduct, session }: Props) {
    const { add_to_cart, not_available, show_cart } = tProduct;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [clicked, setClicked] = useState<boolean>(false);

    const id = product?.id!;
    const cartContext = useContext(CartContext);
    const { addItemToCart, isInCart } = cartContext || {};
    const router = useRouter();

    const addToCartHandler = async () => {
        if (!session || !session) return router.push('/login');
        if (isInCart && isInCart(id)) return router.push('/cart');

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
            }
        }
    };

    const renderButtonContent = () => {
        if (!product.stock) {
            return (
                <a className="btn out-of-stock px-0" style={{ fontSize: '15px' }}>
                    {not_available}
                </a>
            );
        }

        if (isInCart && !isInCart(id) && !clicked) {
            return (
                <button className="btn add-to-cart" onClick={() => {
                    addToCartHandler();
                    setClicked(true);
                }}>
                    {add_to_cart}
                </button>
            );
        }

        return (
            <button className="btn add-to-cart" >
                <Link href='/cart' >
                    {isLoading ? <div className="spinner-border" style={{ width: "1.29rem", height: "1.29rem", color: "white" }} role="status" /> : <p style={{ color: "white", margin: 0 }}>{show_cart}</p>}
                </Link>
            </button>
        );
    };

    return renderButtonContent();
}
