import React from "react";
import Skeleton from "react-loading-skeleton";

const ShopByBrandSkeleton = () => {
  return (
    <section className="featured-categories mb-5">
      <div className="container container-inner">
        <div className="d-flex justify-content-between align-items-center">
          <div className="section-title mb-0">Shop By Brands</div>
        </div>
        <div className="categories-wrapper">
          <div className="swiper">
            <div className="swiper-wrapper" style={{ paddingTop: "2rem" }}>
              <a className="">
                <div className="item-img d-flex gap-4">
                  <Skeleton className="img-fluid" width={200} height={200} />
                  <Skeleton className="img-fluid" width={200} height={200} />
                  <Skeleton className="img-fluid" width={200} height={200} />
                  <Skeleton className="img-fluid" width={200} height={200} />
                  <Skeleton className="img-fluid" width={200} height={200} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByBrandSkeleton;
