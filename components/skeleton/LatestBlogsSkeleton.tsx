import React from "react";
import Skeleton from "react-loading-skeleton";

const LatestBlogsSkeleton = () => {
  return (
    <section className="blog-section mb-5">
      <div className="container container-inner">
        <div className="d-flex justify-content-between align-items-center mb-2rem">
          <div className="section-title mb-0">Latest from our blog</div>
          <Skeleton className="see-all" />
        </div>
        <div className="row">
          {/* BlogCard */}
          <div className="col-md-4 mb-3">
            <div className="single-blog-post">
              <div className="post-thumbnail">
                <span>
                  <Skeleton width={500} height={500} />
                </span>
              </div>
              <Skeleton />
              <div className="d-flex justify-content-between align-items-center">
                <Skeleton className="read-more" />
                <Skeleton className="fz13 text-black-50 fw-normal" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4 mb-3">
            <div className="single-blog-post">
              <div className="post-thumbnail">
                <span>
                  <Skeleton width={500} height={500} />
                </span>
              </div>
              <Skeleton />
              <div className="d-flex justify-content-between align-items-center">
                <Skeleton className="read-more" />
                <Skeleton className="fz13 text-black-50 fw-normal" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4 mb-3">
            <div className="single-blog-post">
              <div className="post-thumbnail">
                <span>
                  <Skeleton width={500} height={500} />
                </span>
              </div>
              <Skeleton />
              <div className="d-flex justify-content-between align-items-center">
                <Skeleton className="read-more" />
                <Skeleton className="fz13 text-black-50 fw-normal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsSkeleton;
