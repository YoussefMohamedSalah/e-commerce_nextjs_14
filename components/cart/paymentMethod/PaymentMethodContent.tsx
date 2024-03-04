"use client"

import Breadcrumb from '@/components/ui/breadcrumb';
import CartData from '@/types/checkout';
import React, { useEffect, useState } from 'react'
import { BASE_API_URL } from '@/constants/baseUrl';
import PaymentMethodList from './PaymentMethodList';
import Aside from '../Aside';
import { PAGES } from '@/constants/pages';
import { useRouter } from 'next/navigation';
import { Session } from "@/types/session";

interface Props {
    tCart: any;
    tShipping: any;
    lang: string;
    session: Session | null;
};

const PaymentMethodContent = ({ tCart, tShipping, lang, session }: Props) => {
    const [initialized, setInitialized] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<any>();
    const [cartData, setCartData] = useState<CartData | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<any>();
    const [paymentMethodsData, setPaymentMethodsData] = useState<any[]>([]);
    const router = useRouter();


    useEffect(() => {
        if (typeof window !== "undefined") {
            let address = localStorage.getItem("selected_address");
            if (address) {
                setSelectedAddress(JSON.parse(address))
            }
        }
    }, []);

    useEffect(() => {
        if (!initialized) {
            getCheckoutData();
            getPaymentMethodsData();
            setInitialized(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialized])

    useEffect(() => {
        if (initialized && selectedAddress) {
            getCheckoutData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPaymentMethod])

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

    const getPaymentMethodsData = async () => {
        if (!session) return null;

        try {
            const favoritesUrl = `${BASE_API_URL}/payment_gates/list`;
            const res = await fetch(`${favoritesUrl}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session?.user?.token!}`,
                    "Accept-Language": `${lang}`
                },
            });
            if (!res.ok) {
                throw new Error("Failed to fetch Payment Methods");
            }
            const data = await res.json();
            // setCartData(data.data)
            setPaymentMethodsData(data.data.original.data)
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };

    const handleSelectPaymentMethod = (payment: any) => {
        setSelectedPaymentMethod(payment);
    };

    const handleCreateOrder = async () => {
        if (!session || !selectedAddress || !selectedPaymentMethod) return null;

        const data = {
            address_id: selectedAddress.id,
            payment_method_id: selectedPaymentMethod.payment_methods[0]?.id!,
            shipping_method_id: 1,
            use_wallet: 0,
        }

        try {
            const response = await fetch(
                `${BASE_API_URL}/order/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${session?.user?.token!}`,
                    },
                    body: JSON.stringify(data)

                }
            );
            let res = await response.json();
            if (res && res.success) {
                router.push(PAGES.THANKS)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="cart-page-container">
            <Breadcrumb homeElement={"Home"} capitalizeLinks />
            {selectedAddress && cartData && (
                <div className="row">
                    <PaymentMethodList handleSelect={handleSelectPaymentMethod} lang={lang} tShipping={tShipping} paymentMethods={paymentMethodsData} />
                    <Aside disabled={(selectedAddress && cartData.can_checkout) ? false : true} cartData={cartData} tCart={tCart} btnContent={tCart.pay_now} onBtnClick={handleCreateOrder} />
                </div>
            )}
        </div>
    )
}

export default PaymentMethodContent;