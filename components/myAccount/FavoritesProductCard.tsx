"use client"

import React, { useContext } from 'react';
import { LinkProps } from "next/link";
import Image from '@/components/ui/image';
import FavoritesContext from "../../contexts/FavoritesContext";
import { Session } from '@/types/session';


interface Props {
	item: any;
	href: LinkProps["href"];
	className?: string;
	tAction: any
	session: Session | null;
};

export default function FavoritesProductCard({ item, href, tAction, session }: Props) {
	const { name, price, media, id } = item ?? {};
	const favoritesContext = useContext(FavoritesContext);
	const { toggleItemFavorites, favorites } = favoritesContext || {};

	const handleToggle = () => {
		if (!toggleItemFavorites || !session) return;
		toggleItemFavorites(id, true, session);
	};


	return (
		<div className="single-cart-item border rounded10 p-3 mb-2">
			<div className="item-img bg-transparent">
				<Image src={media?.path! ?? ''} alt="" width={168} height={120} />
			</div>
			<div className="title-and-price d-flex flex-column justify-content-between w-100">
				<h3 className="title fz14 fw-normal lh-base">{name}</h3>
				<div className="price fz14">KWD {price}</div>
			</div>
			<div className="d-flex flex-column justify-content-around align-items-center flex-shrink-0">
				<button className="buy-item btn text-blue fz14 d-flex align-items-center gap-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="#264AEC" />
						<path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="#264AEC" />
						<path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#264AEC" />
						<path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="#264AEC" />
					</svg>
					{tAction.buy_now}
				</button>
				<button className="remove-item btn text-error fz14 d-flex align-items-center gap-1" onClick={handleToggle}>
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
						<path d="M18.935 2.88151L18.2193 21.8472C18.1988 22.3909 17.7341 22.8389 17.1927 22.8389H4.80559C4.26293 22.8389 3.79946 22.3917 3.77891 21.8472L3.06323 2.88151C3.05114 2.56106 2.78155 2.31108 2.4611 2.32317C2.14065 2.33527 1.89067 2.60485 1.90276 2.9253L2.61845 21.891C2.66252 23.0588 3.63808 24.0002 4.80559 24.0002H17.1927C18.3587 24.0002 19.3357 23.0583 19.3798 21.891L20.0955 2.9253C20.1076 2.60485 19.8576 2.33527 19.5371 2.32317C19.2167 2.31108 18.9471 2.56106 18.935 2.88151Z" fill="#DA1E28" />
						<path d="M10.6133 7.16121V20.3225C10.6133 20.6432 10.8732 20.9031 11.1939 20.9031C11.5146 20.9031 11.7746 20.6432 11.7746 20.3225V7.16121C11.7746 6.84053 11.5146 6.58057 11.1939 6.58057C10.8732 6.58057 10.6133 6.84053 10.6133 7.16121Z" fill="#DA1E28" />
						<path d="M6.16041 7.17829L6.54751 20.3396C6.55694 20.6601 6.82443 20.9123 7.14497 20.9029C7.46552 20.8935 7.71772 20.626 7.7083 20.3054L7.3212 7.14415C7.31177 6.8236 7.04428 6.57139 6.72374 6.58082C6.40319 6.59025 6.15098 6.85774 6.16041 7.17829Z" fill="#DA1E28" />
						<path d="M14.6764 7.14415L14.2893 20.3054C14.2799 20.626 14.5321 20.8935 14.8526 20.9029C15.1732 20.9123 15.4407 20.6601 15.4501 20.3396L15.8372 7.17829C15.8466 6.85774 15.5944 6.59025 15.2739 6.58082C14.9533 6.57139 14.6858 6.8236 14.6764 7.14415Z" fill="#DA1E28" />
						<path d="M1.32283 3.2902H20.6777C20.9983 3.2902 21.2583 3.03023 21.2583 2.70955C21.2583 2.38887 20.9983 2.12891 20.6777 2.12891H1.32283C1.00215 2.12891 0.742188 2.38887 0.742188 2.70955C0.742188 3.03023 1.00215 3.2902 1.32283 3.2902Z" fill="#DA1E28" />
						<path d="M7.66807 2.73177L8.08237 1.69604C8.19266 1.42031 8.5753 1.16129 8.87089 1.16129H13.129C13.4267 1.16129 13.8064 1.41839 13.9175 1.69604L14.3318 2.73177L15.41 2.30048L14.9957 1.26475C14.7083 0.546205 13.9015 0 13.129 0H8.87089C8.10049 0 7.2908 0.548085 7.00414 1.26475L6.58984 2.30048L7.66807 2.73177Z" fill="#DA1E28" />
					</svg>
					{tAction.remove}
				</button>
			</div>
		</div>
	)
}
