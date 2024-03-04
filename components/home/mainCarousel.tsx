"use client";

import React from "react";
import Image from "@/components/ui/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SINGLE_ITEM_BREAKPOINTS } from "@/constants/breakPoints";

interface Props {
  data: any[];
  showDots?: boolean;
  autoPlay?: boolean;
};

export default function MainCarousel({ data, showDots, autoPlay }: Props) {
  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <span
        role="button"
        className={`swiper-pagination-bullet ${active ? "swiper-pagination-bullet-active" : ""}`}
        onClick={() => onClick()}
      />
    );
  };


  return (
    <section className="header-slider w-100">
      <div className="swiper position-sticky">
        <div className="swiper-wrapper">
          <Carousel
            responsive={SINGLE_ITEM_BREAKPOINTS}
            ssr
            minimumTouchDrag={10}
            autoPlaySpeed={3000}
            // autoPlay={!!autoPlay ? autoPlay : true}
            autoPlay={false}
            arrows={false}
            draggable={true}
            showDots={!!showDots ? showDots : true}
            partialVisible={false}
            infinite
            swipeable
            dotListClass="swiper-pagination custom-swiper-pagination"
            customDot={<CustomDot />}
            renderDotsOutside
          >
            {data.map((banner: any, index: number) => {
              return (
                <a key={index} className=" d-flex justify-content-center align-items-center w-100">
                  <Image
                    style={{
                      borderRadius: "25px",
                      maxHeight: "500px",
                      minHeight: "220px"
                    }}
                    className="img-fluid"
                    src={banner.image_800}
                    alt="movie"
                    width={2170}
                    height={500}
                    quality={100}
                  />
                </a>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
