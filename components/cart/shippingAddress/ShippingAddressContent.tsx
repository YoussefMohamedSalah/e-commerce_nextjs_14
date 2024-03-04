"use client";

import React, { useEffect, useState } from 'react'
import { BASE_API_URL } from '@/constants/baseUrl';
import CartData from '@/types/checkout';
import Breadcrumb from '../../ui/breadcrumb';
import { PAGES } from '@/constants/pages';
import AddressesList from './AddressesList';
import Aside from '../Aside';
import { useRouter } from 'next/navigation';
import { Session } from "@/types/session";

interface Props {
    tCart: any;
    tShipping: any;
    lang: string;
    session: Session | null;
};

export type AddressType = {
    apartment: string;
    building: string;
    city: {
        id: number;
        name: string;
    };
    city_id: number;
    country: {
        id: number;
        name: string;
    };
    country_id: number;
    created_at: string;
    floor: string;
    id: number;
    notes: string | null;
    phone: string;
    region: string;
    street: string;
    zip_code: string;
};

export default function ShippingAddressContent({ tCart, tShipping, lang, session }: Props) {
    const [initialized, setInitialized] = useState<boolean>(false);
    const [addressesData, setAddressesData] = useState<AddressType[] | null>(null);
    const [cartData, setCartData] = useState<CartData | null>(null);
    const [selectedAddress, setSelectedAddress] = useState<any>(null);
    const router = useRouter()


    useEffect(() => {
        if (!initialized) {
            getCheckoutData();
            getAddressesData();
            setInitialized(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialized])

    useEffect(() => {
        if (initialized && selectedAddress) {
            getCheckoutData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAddress])

    const getCheckoutData = async () => {
        if (!session) return null;

        try {
            const favoritesUrl = `${BASE_API_URL}/checkout?address_id=${selectedAddress ? selectedAddress.id : ""}&shipping_method_id=1&use_wallet=0`;
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

    const getAddressesData = async () => {
        if (!session) return null;

        try {
            const favoritesUrl = `${BASE_API_URL}/addresses`;
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
            setAddressesData(data.data)
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };

    const handleSelectAddress = (address: any) => {
        setSelectedAddress(address);
        if (typeof window !== "undefined") {
            localStorage.setItem("selected_address", JSON.stringify(address))
        };
    };

    const handleOnBtnClick = () => {
        router.push(PAGES.PAYMENT_METHOD)
    }

    return (
        <div className="cart-page-container">
            <Breadcrumb homeElement={"Home"} capitalizeLinks />
            {addressesData && cartData && (
                <div className="row">
                    <AddressesList handleSelect={handleSelectAddress} addresses={addressesData} lang={lang} tCart={tCart} tShipping={tShipping} session={session ? session : null} />
                    <Aside disabled={(selectedAddress && cartData.can_checkout) ? false : true} cartData={cartData} tCart={tCart} btnContent={tCart.continue_to_payment} onBtnClick={handleOnBtnClick} />
                </div>
            )}
        </div>
    );
}
