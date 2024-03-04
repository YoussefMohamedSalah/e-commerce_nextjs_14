import { SingleProductType } from '@/types/product';
import React, { useState, useEffect } from 'react'

interface Props {
	product: SingleProductType;
	tProduct: any;
};

const ProductReviews = ({ product, tProduct }: Props) => {
	const [reviews, setReviews] = useState<any>()

	const getReviews = async () => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/products/${product.slug}/reviews`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);
			let res = await response.json();
			if (res) {
				setReviews(res.data)
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}

	useEffect(() => {
		getReviews()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product])

	return (
		<div>
			{reviews && reviews.data && reviews.data.length > 0 ? (
				<div className="reviews">
					{reviews.data.map((rev: any, index: number) => {
						return (
							<div key={index} className="single-review">
								<div className="reviewer-name mb-2 fw-600 fz20">{rev.user.name} {rev.user.last_name} </div>
								<div className="review-stars mb-2">
									<div className="star-rating">
										<strong className="fz20 fw-600 mx-2">{rev.rate}</strong>
										{Array.from({ length: rev.rate }, (_, index) => (
											<svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M7.19254 2.14054C7.49144 1.4219 8.50946 1.4219 8.80835 2.14054L10.1963 5.47768L13.7991 5.76651C14.5749 5.8287 14.8895 6.7969 14.2984 7.30323L11.5535 9.65453L12.3921 13.1702C12.5727 13.9272 11.7491 14.5256 11.0849 14.1199L8.00045 12.236L4.91601 14.1199C4.2518 14.5256 3.42821 13.9273 3.6088 13.1702L4.44741 9.65453L1.70251 7.30323C1.11142 6.7969 1.426 5.8287 2.20182 5.76651L5.80455 5.47768L7.19254 2.14054Z" fill="#FFA800" />
											</svg>
										))}
										{Array.from({ length: 5 - rev.rate }, (_, index) => (
											<svg key={index + rev.rate} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M7.19254 2.14054C7.49144 1.4219 8.50946 1.4219 8.80835 2.14054L10.1963 5.47768L13.7991 5.76651C14.5749 5.8287 14.8895 6.7969 14.2984 7.30323L11.5535 9.65453L12.3921 13.1702C12.5727 13.9272 11.7491 14.5256 11.0849 14.1199L8.00045 12.236L4.91601 14.1199C4.2518 14.5256 3.42821 13.9273 3.6088 13.1702L4.44741 9.65453L1.70251 7.30323C1.11142 6.7969 1.426 5.8287 2.20182 5.76651L5.80455 5.47768L7.19254 2.14054Z" fill="#D3D3D3" />
											</svg>
										))}
									</div>
								</div>
								<div className="review-title fz16 fw-600 mb-2">{rev.title}</div>
								<div className="review-description">
									{rev.comment}
								</div>
							</div>
						)
					})}
				</div>
			) : (
				<>
					<div className="text-center border-1 border-dashd rounded-4 mb-4" style={{ paddingTop: "40px", paddingBottom: "40px", borderStyle: "dashed", color: "rgb(136, 136, 136)" }}>
						<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon mb-3" width="65px" height="65px" viewBox="0 0 24 24">
							<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path>
						</svg>
						<p className="fz24 text-black mb24" style={{ color: "rgb(136, 136, 136) !important" }}>{tProduct.no_reviews_msg}</p>
					</div>
				</>
			)}
		</div>
	)
}

export default ProductReviews
