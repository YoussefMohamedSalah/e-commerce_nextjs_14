import React from "react";
import RelatedBlogs from "./relatedBlogs";
import BlogsGrid from "./blogsGrid";
import { useTranslations } from "next-intl";
import Container from "../ui/container";

export default function AllBlogs({ data, related }: any) {
  const t = useTranslations("Common");

  return (
    <section className="blogs-wrapper">
      <>
        <div className="fz24 fw-600 text-black mb-4">
          {t("blog")}
        </div>
        <BlogsGrid data={data} />
        <RelatedBlogs data={related} />
      </>
    </section>
  );
}
