"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PAGES } from "@/constants/pages";
import CategoryCard from "./categoryCard";
import TopCategoriesBtnsGroup from "./topCategoriesBtnsGroup";
import { TOP_CATEGORIES_BREAKPOINTS } from "@/constants/breakPoints";

interface Props {
  categories: any[];
  isSubCategory: boolean;
  locale: string;
}

export default function TopCategoriesCarousel({
  categories,
  locale,
  isSubCategory
}: Props) {
  const isRtl = locale === "ar";

  return (
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
            customButtonGroup={<TopCategoriesBtnsGroup locale={locale} />}
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
            responsive={TOP_CATEGORIES_BREAKPOINTS}
            rewind={false}
            rewindWithAnimation={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            rtl={isRtl}
          >
            {categories.map((category: any) => {
              let href = !category.has_children
                ? {
                  pathname: PAGES.PRODUCTS,
                  query: { selections: `${category.id}-${category.name}-category` }
                }
                : `${PAGES.CATEGORIES + "/" + category.slug}`;
              return (
                <div key={`category--key-${category.id}`}>
                  <CategoryCard
                    item={category}
                    href={href}
                    className="single-cat-item"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
