"use client";

import React, { useState } from "react";
import ArrowLeft from "@/components/svg/arrowLeft";
import ArrowRight from "@/components/svg/arrowRight";

const NewArrivalsBtnsGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  const [isOverRight, setIsOverRight] = useState<boolean>(false);
  const [isOverLeft, setIsOverLeft] = useState<boolean>(false);

  return (
    <>
      <div
        className="swiper-button-prev-outside"
        onClick={() => previous()}
        onMouseOver={() => setIsOverRight(true)}
        onMouseLeave={() => setIsOverRight(false)}
      >
        <ArrowLeft fill={isOverRight ? "white" : ""} />
      </div>
      <div
        className="swiper-button-next-outside"
        onClick={() => next()}
        onMouseOver={() => setIsOverLeft(true)}
        onMouseLeave={() => setIsOverLeft(false)}
      >
        <ArrowRight fill={isOverLeft ? "white" : ""} />
      </div>
    </>
  );
};

export default NewArrivalsBtnsGroup;
