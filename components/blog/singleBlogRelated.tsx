import React from "react";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";
import { PAGES } from "@/constants/pages";

export default function SingleBlogRelated({ data }: any) {
  return (
    <>
    {data && data.length > 0  && (
    <div className="related-posts mb100">
      <div className="fz24 fw-600 text-black mb-4">Read also</div>
      <div className="row">
        {data.map((blog: any) => {
          return (
            <div className="col-md-6 mb-4" key={`blog--key-${blog.id}`}>
              <div className="single-blog-post">
                <div className="post-thumbnail">
                  <Link href={PAGES.BLOG + "/" + blog.slug}>
                    <Image
                      src={blog.image ?? "/assets/blog-post.png"}
                      className="img-fluid"
                      alt={`${blog.title}`}
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="fz14 text-blue my-2 fw-normal">
                  {blog.created_at} By admin
                </div>
                <h4 className="post-title mt-0 ">
                  <Link href={PAGES.BLOG + "/" + blog.slug}>
                    {blog.title}
                  </Link>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    )}
    </>
  );
}
