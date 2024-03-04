"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PAGES } from "@/constants/pages";
import BrandCard from "./brandCard";
import TopCategoriesBtnsGroup from "./topCategoriesBtnsGroup";
import { BRANDS_BREAKPOINTS } from "@/constants/breakPoints";

interface Props {
  brands: any;
  title?: any;
  isBtns?: boolean;
  locale: string;
};

export default function ShopByBrandCarousel({ brands, isBtns, title, locale }: Props) {
  const isRtl = locale === "ar";
  const { data } = brands;
  return (
    <section className="featured-categories mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="section-title mb-0">{title}</div>
      </div>
      <div className="categories-wrapper">
        <div className="swiper position-sticky">
          <div className="swiper-wrapper" style={{ paddingTop: "2rem" }}>
            <Carousel
              additionalTransfrom={0}
              autoPlay
              autoPlaySpeed={4000}
              ssr={true}
              arrows={false}
              centerMode={false}
              containerClass=""
              customButtonGroup={isBtns ? <TopCategoriesBtnsGroup locale={locale} /> : <></>}
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
              responsive={BRANDS_BREAKPOINTS}
              rewind={false}
              rewindWithAnimation={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              rtl={isRtl}
            >
              {data.map((brand: any) => {
                return (
                  <BrandCard
                    key={`brand--key-${brand.id}`}
                    item={brand}
                    href={{
                      pathname: PAGES.PRODUCTS,
                      query: { selections: `${brand.id}-${brand.name}-brand` }
                    }}
                    className="brand-logo"
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
