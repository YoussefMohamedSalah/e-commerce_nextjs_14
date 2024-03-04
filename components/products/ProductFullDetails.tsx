/* eslint-disable @next/next/no-img-element */
"use client"
import { SingleProductType } from "@/types/product";
import HTMLParser from "@/utils/HTMLParser";
import React, { useState } from "react";
import ProductReviews from "./ProductReviews";
import ProductReviewModal from "./ProductReviewModal";
import { Session } from "@/types/session";

interface Props {
	product: SingleProductType;
	tProduct: any;
	session: Session | null;
};

export default function ProductFullDetails({ product, tProduct, session }: Props) {
	const [activeTab, setActiveTab] = useState("details");
	const [maxHeight, setMaxHeight] = useState<number>(100);

	return (
		<div className="product-details-and-reviews mt100 mb100">
			<div className="tabs-wrapper">
				<div className="">
					<ul className="nav nav-tabs border-0 gap-2">
						<li className="nav-item">
							<a
								className={`nav-link ${activeTab === "details" ? "active" : ""}`}
								onClick={() => setActiveTab("details")}
								data-bs-toggle="tab"
								data-bs-target="#details"
								type="button"
								aria-selected={activeTab === "details"}
							>
								{tProduct.product_details}
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
								onClick={() => setActiveTab("reviews")}
								data-bs-toggle="tab"
								data-bs-target="#reviews"
								type="button"
								aria-selected={activeTab === "reviews"}
							>
								{tProduct.reviews}
							</a>
						</li>
					</ul>

				</div>
			</div>

			<div className="">
				<div className="tab-content">
					<div className="tab-pane fade show active" id="details" tabIndex={0}>
						<div className="product-details-wrapper">
							<h5 className="fz16 fw-600 mb-2">{tProduct.overview}</h5>
							<div className="text-secondary" style={{ maxHeight: `${maxHeight}px`, overflow: 'hidden' }}>
								{HTMLParser(product.description)}
							</div>
							<div className="text-center">
								<button id="toggle_more"
									className="btn btn-link fz14 p-0 mt-3 mb-2rem fw-500 text-decoration-none  text-primary collapsed"
									type="button" data-bs-toggle="collapse" data-bs-target="#more_details">
									{maxHeight === 100 ? (
										<span role="button" onClick={() => setMaxHeight(2000)}>{tProduct.show_more}</span>
									) : (
										<span role="button" onClick={() => setMaxHeight(100)}>{tProduct.show_less}</span>
									)}
								</button>
							</div>
						</div>
					</div>
					<div className="tab-pane fade " id="reviews" tabIndex={0}>
						<div className="d-flex justify-content-between gap-4 align-items-center mb-2rem">
							<div className="overall-rating d-flex align-items-center">
								{product.reviews_count > 0 && (
									<>
										<strong className="fw-600 fz40 pe-3 lh-1 mx-2">{product.reviews_avg}</strong>
										<span>
											<span className="stars mb-2 d-block">
												{Array.from({ length: Math.floor(Number(product.reviews_avg)) }, (_, index) => (
													<svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<path fillRule="evenodd" clipRule="evenodd" d="M7.19254 2.14054C7.49144 1.4219 8.50946 1.4219 8.80835 2.14054L10.1963 5.47768L13.7991 5.76651C14.5749 5.8287 14.8895 6.7969 14.2984 7.30323L11.5535 9.65453L12.3921 13.1702C12.5727 13.9272 11.7491 14.5256 11.0849 14.1199L8.00045 12.236L4.91601 14.1199C4.2518 14.5256 3.42821 13.9273 3.6088 13.1702L4.44741 9.65453L1.70251 7.30323C1.11142 6.7969 1.426 5.8287 2.20182 5.76651L5.80455 5.47768L7.19254 2.14054Z" fill="#FFA800" />
													</svg>
												))}
												{Number(product.reviews_avg) % 1 !== 0 && (
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<path fillRule="evenodd" clipRule="evenodd" d="M7.19254 2.14054C7.49144 1.4219 8.50946 1.4219 8.80835 2.14054L10.1963 5.47768L13.7991 5.76651C14.5749 5.8287 14.8895 6.7969 14.2984 7.30323L11.5535 9.65453L12.3921 13.1702C12.5727 13.9272 11.7491 14.5256 11.0849 14.1199L8.00045 12.236L4.91601 14.1199C4.2518 14.5256 3.42821 13.9273 3.6088 13.1702L4.44741 9.65453L1.70251 7.30323C1.11142 6.7969 1.426 5.8287 2.20182 5.76651L5.80455 5.47768L7.19254 2.14054Z" fill="#FFA800" />
													</svg>
												)}
												{Array.from({ length: Math.floor(5 - Number(product.reviews_avg)) }, (_, index) => (
													<svg key={index + Math.floor(Number(product.reviews_avg))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<path fillRule="evenodd" clipRule="evenodd" d="M7.19254 2.14054C7.49144 1.4219 8.50946 1.4219 8.80835 2.14054L10.1963 5.47768L13.7991 5.76651C14.5749 5.8287 14.8895 6.7969 14.2984 7.30323L11.5535 9.65453L12.3921 13.1702C12.5727 13.9272 11.7491 14.5256 11.0849 14.1199L8.00045 12.236L4.91601 14.1199C4.2518 14.5256 3.42821 13.9273 3.6088 13.1702L4.44741 9.65453L1.70251 7.30323C1.11142 6.7969 1.426 5.8287 2.20182 5.76651L5.80455 5.47768L7.19254 2.14054Z" fill="#D3D3D3" />
													</svg>
												))}
											</span>
											<small className="text-secondary d-block fz12">{tProduct.based_on} {product.reviews_count} {tProduct.reviews}</small>
										</span>
									</>
								)}
							</div>


							<button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#review-modal">
								{tProduct.write_review}
							</button>
						</div>

						<ProductReviews product={product} tProduct={tProduct} />
					</div>
				</div>
			</div>
			{/* rev Modal */}
			<ProductReviewModal product={product} tProduct={tProduct} session={session ? session : null} />
			{/* end */}
		</div>
	);
}
