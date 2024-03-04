"use client";

import { SingleProductType } from '@/types/product';
import React, { RefObject, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from '../ui/image';
import { SINGLE_ITEM_BREAKPOINTS, SINGLE_PRODUCT_SUB_CAROUSEL_BREAKPOINTS } from '@/constants/breakPoints';

interface Props {
	product: SingleProductType;
};

const SingleProductSyncCarousel = ({ product }: Props) => {
	const mainCarouselRef: RefObject<Carousel> = useRef(null);
	const subCarouselRef: RefObject<Carousel> = useRef(null);
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

	const handleMainSlideChange = (currentSlide: number) => {
		setActiveImageIndex(currentSlide - 1);
	};

	const handleSubSlideChange = (currentSlide: number) => {
		setActiveImageIndex(currentSlide);
		if (mainCarouselRef.current) {
			mainCarouselRef.current.goToSlide(currentSlide);
		}
	};

	const handleSubImageClick = (index: number) => {
		setActiveImageIndex(index);
		if (mainCarouselRef.current) {
			mainCarouselRef.current.goToSlide(index);
		}
	};

	return (
		<div className="product-gallery position-relative">
			{/* MAIN */}
			<div className="swiper product-main-slides">
				<div className="swiper-wrapper">
					<Carousel
						ref={mainCarouselRef}
						additionalTransfrom={0}
						ssr={true}
						autoPlay
						arrows={false}
						autoPlaySpeed={4000}
						centerMode={false}
						className=""
						containerClass=""
						customButtonGroup={<></>}
						renderButtonGroupOutside
						dotListClass="swiper-pagination"
						draggable
						focusOnSelect={false}
						infinite
						itemClass=""
						keyBoardControl
						minimumTouchDrag={80}
						pauseOnHover
						renderArrowsWhenDisabled={false}
						renderDotsOutside={true}
						responsive={SINGLE_ITEM_BREAKPOINTS}
						rewind={false}
						rewindWithAnimation={false}
						rtl={false}
						shouldResetAutoplay
						showDots={false}
						sliderClass=""
						slidesToSlide={1}
						swipeable
						afterChange={handleMainSlideChange}
					>
						{product?.media?.map((image: any) => {
							return (
								<div key={`image--key-${image.id}`} className="swiper-slide">
									<Image
										src={image.path}
										alt={`${product.name}`}
										width={500}
										height={400}
									/>
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>
			{/* SUB */}
			<div className="swiper product-main-slides">
				<div className="swiper-wrapper">
					<Carousel
						ref={subCarouselRef}
						additionalTransfrom={0}
						ssr={true}
						arrows={false}
						autoPlaySpeed={3000}
						centerMode={false}
						className=""
						containerClass=""
						customButtonGroup={<></>}
						renderButtonGroupOutside
						dotListClass=""
						draggable
						focusOnSelect={false}
						infinite
						itemClass=""
						keyBoardControl
						minimumTouchDrag={80}
						pauseOnHover
						renderArrowsWhenDisabled={false}
						renderDotsOutside={false}
						responsive={SINGLE_PRODUCT_SUB_CAROUSEL_BREAKPOINTS}
						rewind={false}
						rewindWithAnimation={false}
						rtl={false}
						shouldResetAutoplay
						showDots={false}
						sliderClass=""
						slidesToSlide={1}
						swipeable
						afterChange={handleSubSlideChange}
					>
						{product?.main_option?.media?.map((image: any, index: number) => {
							let isActive = (activeImageIndex === product?.main_option?.media.length && index === 0)
							return (
								<div
									onClick={() => handleSubImageClick(index + 2)}
									key={`image--key-${image.id}`}
									className={`swiper-slide ${(index === activeImageIndex || isActive) ? 'swiper-slide-active' : ''
										}`}
									style={{
										maxWidth: "243px",
										maxHeight: "160px",
										padding: "1rem",
										cursor: "pointer"
									}}
								>
									<Image
										src={image.path}
										alt={`${product.name}`}
										width={223}
										height={140}
									/>
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default SingleProductSyncCarousel
