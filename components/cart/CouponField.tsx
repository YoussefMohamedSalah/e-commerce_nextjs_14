import React from 'react';

interface Props {
    tCart: any;
};

const CouponField = ({ tCart }: Props) => {
    const handleCouponApply = () => {
        console.log('Coupon applied!');
    };

    return (
        <div className="coupon-field">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01L4 11V4h7v-.01l9 9z"
                ></path>
                <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"></circle>
            </svg>
            <input type="text" className="form-control" placeholder={`${tCart.coupon_code}`} />
            <button className="submit-coupon" onClick={handleCouponApply}>
                {tCart.apply}
            </button>
        </div>
    );
};

export default CouponField;
