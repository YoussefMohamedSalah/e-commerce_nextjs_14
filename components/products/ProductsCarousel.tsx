"use client";

import { PAGES } from "@/constants/pages";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import NewArrivalsBtnsGroup from "../home/newArrivalsBtnsGroup";
import Link from "../ui/link";
import { PRODUCTS_BREAKPOINTS } from "@/constants/breakPoints";
import dynamic from "next/dynamic";
import { Session } from "@/types/session";

const ProductCard = dynamic(() => import('../../components/common/productCard'))

interface Props {
  data: any;
  title: string;
  isCategories: boolean;
  isBtn?: boolean;
  tProduct: any;
  className: string;
  session: Session | null;
};

export default function ProductsCarousel({ data, title, isCategories, isBtn, tProduct, className, session }: Props) {
  const { all, shop_all } = tProduct
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const { products, categories } = data;
  const [filteredProducts, setFilteredProducts] = useState<any>(products)

  const handleFilter = (categoryId: number) => {
    setActiveTabId(categoryId);
    let filteredData = products?.filter((product: any) => product.category_id === categoryId)! || [];
    setFilteredProducts(filteredData)
  };

  return (
    <>
      <div className={`${className} justify-content-between align-items-center mb-2rem`}>
        <div className="section-title mb-0">{title}</div>
        {isBtn && (
          <Link href={PAGES.WHATS_NEW} className="see-all">
            {shop_all}
          </Link>)}
        {isCategories && (
          <div className="filter-cats">
            <ul className="d-flex flex-wrap list-unstyled justify-content-center justify-content-lg-end">
              <>
                <button className={`${activeTabId === 1 && "active"}`} onClick={() => {
                  setFilteredProducts(products);
                  setActiveTabId(1);
                }}>
                  {all}
                </button>
                {categories && categories?.map((category: any) => {
                  return (
                    <button onClick={() => handleFilter(category.id)} key={category.id} className={`${activeTabId === category.id && "active"}`}>
                      {category.name}
                    </button>
                  )
                })}
              </>
            </ul>
          </div>
        )}
      </div>
      <div>
        <div className="swiper position-sticky">
          <div className="swiper-wrapper">
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
              {filteredProducts?.map((product: any) => {
                return (
                  <div key={`product--key-${product.id}`} className="gap-2">
                    <ProductCard
                      item={product}
                      tProduct={tProduct}
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
      </div>
    </>
  );
}
