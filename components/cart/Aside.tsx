"use client"
import React from 'react'
import CartData from '@/types/checkout';
import CouponField from './CouponField';

interface Props {
    tCart: any;
    cartData: CartData;
    disabled: any;
    btnContent: string;
    onBtnClick: () => void;
};

const Aside = ({ btnContent, tCart, cartData, onBtnClick, disabled }: Props) => {
    return (
        <div className="col-lg-4">
            <div className="order-summary">
                <div className="section-title fw-600">{tCart.order_summary}</div>
                <div className="info-line">
                    <strong>{tCart.price}</strong>
                    <span>KWD {cartData?.sub_total.toFixed(3)! || 0.000}</span>
                </div>
                <div className="info-line">
                    <strong>{tCart.discount}</strong>
                    <span>KWD {cartData?.discount.toFixed(3)! || 0.000}</span>
                </div>
                <div className="info-line">
                    <strong>{tCart.shipping}</strong>
                    <span className="text-blue">KWD&nbsp;{cartData?.shipping_fees.toFixed(3)! || 0.000}</span>
                </div>
                <hr className="hr" />
                <div className="info-line">
                    <strong className="fw-normal fz14">{tCart.total}</strong>
                    <span className="fw-500 fz16">KWD {cartData?.total.toFixed(3)! || 0.000}</span>
                </div>
                <div className="info-line">
                    <strong className="fw-normal fz14">{tCart.estimated_delivery}</strong>
                    <span className="fw-500 fz16">{cartData?.delivery_time}</span>
                </div>
                <CouponField tCart={tCart} />

                <button className="btn btn-primary fz16 fw-500 w-100" disabled={disabled} onClick={onBtnClick}>
                    {btnContent}
                </button>
            </div>
        </div>
    )
}

export default Aside
