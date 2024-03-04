import { SingleProductType } from "@/types/product";
import { Session } from "@/types/session";
import React, { useState, useRef } from "react";


interface Errors {
	rating?: string;
	reviewTitle?: string;
	reviewContent?: string;
};

interface Props {
	product: SingleProductType;
	tProduct: any;
	session: Session | null;
};

const ProductReviewModal = ({ tProduct, product, session }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [rating, setRating] = useState(0);
	const [reviewTitle, setReviewTitle] = useState("");
	const [reviewContent, setReviewContent] = useState("");
	const [errors, setErrors] = useState<Errors>({});
	const modalRef = useRef<HTMLDivElement>(null);


	const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRating(parseInt(event.target.value));
	};

	const handleReviewTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReviewTitle(event.target.value);
	};

	const handleReviewContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setReviewContent(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		// Validation rules
		const newErrors: Errors = {};
		if (rating === 0) {
			newErrors.rating = "Please select a rating.";
		}
		if (!reviewTitle.trim()) {
			newErrors.reviewTitle = "Please enter a review title.";
		}
		if (!reviewContent.trim()) {
			newErrors.reviewContent = "Please enter your review content.";
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			let reviewObj = {
				rate: rating,
				title: reviewTitle,
				comment: reviewContent
			}
			if (!session) return null;
			try {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/product/${product.slug}/reviews`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
							Authorization: `Bearer ${session?.user?.token!}`,
						},
						body: JSON.stringify(reviewObj)
					}
				);
				let res = await response.json();
				if (res) {
					setIsLoading(false);
					hideModal();
				}
			} catch (error) {
				console.error("Error:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const hideModal = () => {
		if (modalRef.current) {
			modalRef.current.classList.remove('show');
			modalRef.current.setAttribute('aria-hidden', 'true');
			const modalBackdrop = document.querySelector('.modal-backdrop');
			if (modalBackdrop) modalBackdrop.remove();
		}
	};

	return (
		<div className="modal fade" id="review-modal" tabIndex={-1} aria-hidden="true" ref={modalRef}>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-header p-0 mb24">
						<h1 className="modal-title fz20 fw-600">{tProduct.write_review}</h1>
						<button
							type="button"
							className="close btn p-0 shadow-none border-0"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z" fill="#161616" />
								<path d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z" fill="#161616" />
							</svg>
						</button>
					</div>
					<div className="modal-body p-0">
						<form action="" className="review-form text-black" onSubmit={handleSubmit}>
							<div className="mb24">
								<div className="add-rating">
									{[5, 4, 3, 2, 1].map((value) => (
										<React.Fragment key={value}>
											<input
												type="radio"
												className="rating-input"
												id={`${value}_star`}
												name="rating-input"
												value={value}
												checked={rating === value}
												onChange={handleRatingChange}
											/>
											<label htmlFor={`${value}_star`} className="rating-star" />
										</React.Fragment>
									))}
								</div>
								{errors.rating && <div className="invalid-feedback text-danger">{errors.rating}</div>}
							</div>
							<div className="mb24">

								<label className="fz16 fw-500  d-block mb-2">{tProduct.your_review_title}</label>
								<input
									type="text"
									className="form-control "
									placeholder="Give your review title"
									value={reviewTitle}
									onChange={handleReviewTitleChange}
								/>
								{errors.reviewTitle && <div className="invalid-feedback text-danger">
									{errors.reviewTitle}
								</div>
								}
							</div>

							<div className="mb24">
								<label className="fz16 fw-500 d-block mb-2">{tProduct.your_review}</label>
								<textarea
									className="form-control"
									placeholder="Give your review content"
									value={reviewContent}
									onChange={handleReviewContentChange}
								/>
								{errors.reviewContent && <div className="invalid-feedback text-danger">
									{errors.reviewContent}
								</div>}
							</div>


							<button type="submit" className="btn btn-primary rounded10 w-100 fz14">
								{isLoading ? <div className="spinner-border" style={{ width: "1.4rem", height: "1.4rem" }} role="status" /> : "Submit"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductReviewModal;
