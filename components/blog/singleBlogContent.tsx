import Image from "@/components/ui/image";
import React from "react";
import ShareBtns from './shareBtns';
import SingleBlogBody from "./singleBlogBody";

export default function SingleBlogContent({ data }: any) {
  const {
    id,
    image,
    title,
    slug,
    views,
    type,
    category,
    body,
    created_at
  } = data;


  return (
    <div>
      <h1 className="blog-title mb-4 pb-4">
        {title}
      </h1>
      <Image
        src={image ?? "/assets/blog-post.png"}
        className="post-img img-fluid rounded10 w-100"
        alt={`${title}`}
        width={500}
        height={500}
      />
      <div className="post-meta my-4 d-flex justify-content-between gap-3 align-items-center">
        <div className="fz16 fw-500 text-blue">
          {created_at} By admin
        </div>
          <ShareBtns />
      </div>
      <SingleBlogBody content={body} />
    </div>
  );
}
