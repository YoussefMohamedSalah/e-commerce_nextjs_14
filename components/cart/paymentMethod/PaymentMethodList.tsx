"use client"

import React from "react";
import Image from "@/components/ui/image";

interface Props {
    tShipping: any;
    lang: string;
    paymentMethods: any[];
    handleSelect: (payment: any) => void;
};
const PaymentMethodList = ({ tShipping, lang, handleSelect, paymentMethods }: Props) => {
    return (
        <div className="col-lg-8">
            <div className="text-secondary fz14 mb-3 fw-600">{tShipping.pick_payment_method}</div>
            <div className="text-helper mb-5">{tShipping.payments_are_safe}</div>
            {paymentMethods.length > 0 ? (
                <div className="payment-methods">
                    {paymentMethods.map((payment) => {
                        return (
                            <div className="single-payment-method custom-radio" key={payment.id}>
                                <div className="form-check align-items-center">
                                    <input
                                        id="method_11"
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="payment"
                                        onChange={() => handleSelect(payment)}
                                    />
                                    <label className="form-check-label" htmlFor="method_11">
                                        <span className="gap-3">
                                            <div style={{ width: "40px" }}>
                                                <Image
                                                    className="mw-100 m-auto"
                                                    height={30}
                                                    width={30}
                                                    alt="payment_method1"
                                                    src={payment.image}
                                                />
                                            </div>
                                            <span className="fz16 fw-normal">{payment.name}</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (<>There is no payment methods right now!</>)}
        </div>
    )
}

export default PaymentMethodList
