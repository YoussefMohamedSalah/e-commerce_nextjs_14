"use client";

import React, { useContext, useEffect, useState } from 'react'
import CartContext from '@/contexts/CartContext';
import Link from '../../ui/link';
import { BASE_API_URL } from '@/constants/baseUrl';
import CartData from '@/types/checkout';
import Breadcrumb from '../../ui/breadcrumb';
import CartItemsList from './CartItemsList';
import { PAGES } from '@/constants/pages';
import Aside from '../Aside';
import { useRouter } from 'next/navigation';
import { Session } from "@/types/session";

interface Props {
	tCart: any;
	lang: string;
	session: Session | null;
};

export default function CartContent({ tCart, lang, session }: Props) {
	const [initialized, setInitialized] = useState<boolean>(false);
	const [cartData, setCartData] = useState<CartData | null>(null);
	const cartContext = useContext(CartContext);
	const { deleteItemFromCart, changeQuantity, cart } = cartContext || {};
	const router = useRouter();

	const getCheckoutInfo = async () => {
		if (!session) return null;

		try {
			const favoritesUrl = `${BASE_API_URL}/checkout?address_id=&shipping_method_id=&use_wallet=0`;
			const res = await fetch(`${favoritesUrl}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${session?.user?.token!}`,
					"Accept-Language": `${lang}`
				},
			});
			if (!res.ok) {
				throw new Error("Failed to fetch Checkout");
			}
			const data = await res.json();
			setCartData(data.data)
		} catch (error) {
			console.error("Error:", error);
			return null;
		}
	};

	useEffect(() => {
		if (!initialized) {
			getCheckoutInfo();
			setInitialized(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialized])

	const handleRemove = async (id: number) => {
		if (deleteItemFromCart && session) {
			deleteItemFromCart(id, true, session)
			await getCheckoutInfo();
		}
	};

	const handleChangeQty = async (qty: number, id: number) => {
		if (changeQuantity && session) {
			changeQuantity(id, qty, session);
			await getCheckoutInfo();
		}
	};

	const handleOnBtnClick = () => {
		router.push(PAGES.SHIPPING_ADDRESS)
	};

	return (
		<>
			{cartData ? (<>
				<div className="cart-page-container">
					<Breadcrumb homeElement={"Home"} capitalizeLinks />
					<div className="row">
						{cartData && cartData.cart?.length > 0 ? (
							<>
								<CartItemsList handleRemove={handleRemove} handleChangeQty={handleChangeQty} tCart={tCart} cartData={cartData} />
								<Aside disabled={false} cartData={cartData} tCart={tCart} btnContent={tCart.continue_to_shipping} onBtnClick={handleOnBtnClick} />
							</>
						) : (
							<div className="text-center">
								<svg className="mb24" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
									<path d="M36.38 35.5H15.08C13.1 35.5 11.2 34.66 9.85999 33.2C8.51999 31.74 7.84 29.78 8 27.8L9.66 7.88C9.72 7.26 9.49999 6.66001 9.07999 6.20001C8.65999 5.74001 8.07999 5.5 7.45999 5.5H4C3.18 5.5 2.5 4.82 2.5 4C2.5 3.18 3.18 2.5 4 2.5H7.48001C8.94001 2.5 10.32 3.11999 11.3 4.17999C11.84 4.77999 12.24 5.48001 12.46 6.26001H37.44C39.46 6.26001 41.32 7.06 42.68 8.5C44.02 9.96 44.7 11.86 44.54 13.88L43.46 28.88C43.24 32.54 40.04 35.5 36.38 35.5ZM12.56 9.23999L11 28.04C10.9 29.2 11.28 30.3 12.06 31.16C12.84 32.02 13.92 32.48 15.08 32.48H36.38C38.46 32.48 40.34 30.72 40.5 28.64L41.58 13.64C41.66 12.46 41.28 11.34 40.5 10.52C39.72 9.68002 38.64 9.21997 37.46 9.21997H12.56V9.23999Z" fill="#161616" />
									<path d="M32.5 45.5C30.3 45.5 28.5 43.7 28.5 41.5C28.5 39.3 30.3 37.5 32.5 37.5C34.7 37.5 36.5 39.3 36.5 41.5C36.5 43.7 34.7 45.5 32.5 45.5ZM32.5 40.5C31.94 40.5 31.5 40.94 31.5 41.5C31.5 42.06 31.94 42.5 32.5 42.5C33.06 42.5 33.5 42.06 33.5 41.5C33.5 40.94 33.06 40.5 32.5 40.5Z" fill="#161616" />
									<path d="M16.5 45.5C14.3 45.5 12.5 43.7 12.5 41.5C12.5 39.3 14.3 37.5 16.5 37.5C18.7 37.5 20.5 39.3 20.5 41.5C20.5 43.7 18.7 45.5 16.5 45.5ZM16.5 40.5C15.94 40.5 15.5 40.94 15.5 41.5C15.5 42.06 15.94 42.5 16.5 42.5C17.06 42.5 17.5 42.06 17.5 41.5C17.5 40.94 17.06 40.5 16.5 40.5Z" fill="#161616" />
									<path d="M42 17.5H18C17.18 17.5 16.5 16.82 16.5 16C16.5 15.18 17.18 14.5 18 14.5H42C42.82 14.5 43.5 15.18 43.5 16C43.5 16.82 42.82 17.5 42 17.5Z" fill="#161616" />
								</svg>
								<p className="fz24 text-black mb24">{tCart.cart_empty}</p>
								<Link href="/products?search=page=1&per_page=12&orderBy=created_at&orderType=desc&price_from=&price_to=&selections=" className="btn btn-primary fz14 py-3">{tCart.explore_deals}</Link>
							</div>
						)}
					</div>
				</div>
			</>) : (<>Loading...</>)}
		</>
	);
}
