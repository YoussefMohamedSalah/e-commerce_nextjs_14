"use client"
import React from 'react';
import Image from '../../ui/image';
import Link from '../../ui/link';
import { PAGES } from '@/constants/pages';
import CartData from '@/types/checkout';

interface Props {
    cartData: CartData;
    tCart: any;
    handleChangeQty: (qty: number, itemId: number) => void;
    handleRemove: (itemId: number) => void
};

const CartItemsList = ({ tCart, cartData, handleChangeQty, handleRemove }: Props) => {
    return (
        <div className="col-lg-8">
            <div className="section-title fw-600">{tCart.your_cart}</div>
            <div className="cart-items-wrapper">
                {cartData.cart?.map((cartItem) => (
                    <div className="single-cart-item" key={`cart-${cartItem.id}`}>
                        <Link href={`${PAGES.PRODUCTS}/${cartItem.product.slug}`}>
                            <div className="item-img">
                                <Image width={200} height={200} src={cartItem.product.media[0].path} alt={`${cartItem.product.name}`} />
                            </div>
                        </Link>
                        <div className="title-and-price d-flex flex-column justify-content-between" style={{ width: '-webkit-fill-available' }}>
                            <Link href={`${PAGES.PRODUCTS}/${cartItem.product.slug}`}>
                                <h3 className="title fz14 fw-normal lh-base ms-2">
                                    {cartItem.product.name}
                                </h3>
                            </Link>
                            <div className="price fz14 d-flex">
                                KWD&nbsp;{cartItem.item_total_after_discount.toFixed(3)}
                                <div data-v-3d9820bf="" className="old-price mx-2" style={{ textDecoration: "line-through", color: "rgb(171, 175, 180)" }}>
                                    KWD&nbsp;{cartItem.item_total.toFixed(3)}
                                </div>
                            </div>
                        </div>
                        <div className="quantity-and-remove d-flex flex-column justify-content-between align-items-center">
                            <div className="quantity-wrapper m-0">
                                <div className="quantity-select d-flex justify-content-center align-items-center">
                                    <select
                                        className="nice-select"
                                        onChange={e => handleChangeQty(Number(e.target.value), cartItem.id)}
                                        value={cartItem.quantity}
                                        style={{
                                            backgroundColor: "transparent",
                                            margin: "0px 15px 0px 15px"
                                        }}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty =>
                                            <option key={`key-${qty}`} value={qty} >
                                                {qty}
                                            </option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <button className="remove-item btn text-error fz14 d-flex align-items-center gap-1"
                                onClick={() => handleRemove(cartItem?.id!)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="24"
                                    viewBox="0 0 22 24"
                                    fill="none"
                                >
                                    <path
                                        d="M18.937 2.88102L18.2213 21.8467C18.2008 22.3904 17.7361 22.8384 17.1946 22.8384H4.80754C4.26488 22.8384 3.80141 22.3912 3.78087 21.8467L3.06518 2.88102C3.05309 2.56057 2.78351 2.31059 2.46305 2.32269C2.1426 2.33478 1.89263 2.60436 1.90472 2.92481L2.6204 21.8905C2.66447 23.0583 3.64003 23.9997 4.80754 23.9997H17.1946C18.3607 23.9997 19.3377 23.0578 19.3818 21.8905L20.0974 2.92481C20.1095 2.60436 19.8596 2.33478 19.5391 2.32269C19.2186 2.31059 18.9491 2.56057 18.937 2.88102Z"
                                        fill="#DA1E28"
                                    />
                                    <path
                                        d="M10.6133 7.16072V20.322C10.6133 20.6427 10.8732 20.9027 11.1939 20.9027C11.5146 20.9027 11.7746 20.6427 11.7746 20.322V7.16072C11.7746 6.84004 11.5146 6.58008 11.1939 6.58008C10.8732 6.58008 10.6133 6.84004 10.6133 7.16072Z"
                                        fill="#DA1E28"
                                    />
                                    <path
                                        d="M6.16237 7.1778L6.54946 20.3391C6.55889 20.6596 6.82638 20.9118 7.14693 20.9024C7.46747 20.893 7.71968 20.6255 7.71025 20.3049L7.32315 7.14366C7.31373 6.82312 7.04623 6.57091 6.72569 6.58033C6.40515 6.58976 6.15294 6.85726 6.16237 7.1778Z"
                                        fill="#DA1E28"
                                    />
                                    <path
                                        d="M14.6784 7.14366L14.2913 20.3049C14.2818 20.6255 14.5341 20.893 14.8546 20.9024C15.1751 20.9118 15.4426 20.6596 15.4521 20.3391L15.8392 7.1778C15.8486 6.85726 15.5964 6.58976 15.2758 6.58033C14.9553 6.57091 14.6878 6.82312 14.6784 7.14366Z"
                                        fill="#DA1E28"
                                    />
                                    <path
                                        d="M1.32283 3.2902H20.6777C20.9983 3.2902 21.2583 3.03023 21.2583 2.70955C21.2583 2.38887 20.9983 2.12891 20.6777 2.12891H1.32283C1.00215 2.12891 0.742188 2.38887 0.742188 2.70955C0.742188 3.03023 1.00215 3.2902 1.32283 3.2902Z"
                                        fill="#DA1E28"
                                    />
                                    <path
                                        d="M7.66807 2.73177L8.08237 1.69604C8.19266 1.42031 8.5753 1.16129 8.87089 1.16129H13.129C13.4267 1.16129 13.8064 1.41839 13.9175 1.69604L14.3318 2.73177L15.41 2.30048L14.9957 1.26475C14.7083 0.546205 13.9015 0 13.129 0H8.87089C8.10049 0 7.2908 0.548085 7.00414 1.26475L6.58984 2.30048L7.66807 2.73177Z"
                                        fill="#DA1E28"
                                    />
                                </svg>
                                {tCart.remove}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartItemsList
