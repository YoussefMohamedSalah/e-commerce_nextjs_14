"use client";

import { PAGES } from "@/constants/pages";
import React from "react";
import Carousel from "react-multi-carousel";
import NewArrivalsBtnsGroup from "../home/newArrivalsBtnsGroup";
import Container from "../ui/container";
import { PRODUCTS_BREAKPOINTS } from "@/constants/breakPoints";
import dynamic from "next/dynamic";
import { Session } from "@/types/session";

const ProductCard = dynamic(() => import('../../components/common/productCard'))


interface Props {
  data: any;
  title: string;
  tProduct: any;
  session: Session | null;
};

export default function ProductsCarouselNormal({ data, title, tProduct, session }: Props) {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-2rem">
        <div className="section-title mb-0"> {title} </div>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper ">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={4000}
            centerMode={false}
            className=""
            containerClass=""
            customButtonGroup={<NewArrivalsBtnsGroup />}
            renderButtonGroupOutside
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderDotsOutside={false}
            responsive={PRODUCTS_BREAKPOINTS}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {data?.map((product: any) => {
              return (
                <div key={`product--key-${product.id}`} className="gap-2 ">
                  <ProductCard
                    tProduct={tProduct}
                    item={product}
                    href={PAGES.PRODUCTS + "/" + product.slug}
                    className="single-cat-item"
                    session={session ? session : null}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
