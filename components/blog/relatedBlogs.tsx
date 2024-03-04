import React from "react";
import BlogCard from "./blogCard";
import { PAGES } from "@/constants/pages";
import { useTranslations } from "next-intl";

export default function RelatedBlogs({ data }: any) {
  const t = useTranslations("Common");
  return (
    <div className="related-posts mb100 mt100">
      <div className="fz24 fw-600 text-black mb-4">
        {t("most-reads")}
      </div>
      <div className="row">
        {data.map((blog: any) => {
          return (
            <div
              className="col-lg-3  col-md-6 mb-4"
              key={`blog--key-${blog.id}`}
            >
              <BlogCard
                key={`blog--key-${blog.id}`}
                item={blog}
                href={PAGES.BLOG + "/" + blog.slug}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
