import React from "react";
import SingleBlogRelated from "./singleBlogRelated";
import SingleBlogContent from "./singleBlogContent";

export default function SingleBlog({ data, related }: any) {
  return (
    <section className="single-blog-post-wrapper">
      <div className="container container-inner">
        <SingleBlogContent data={data} />
        <SingleBlogRelated data={related} />
      </div>
    </section>
  );
}
