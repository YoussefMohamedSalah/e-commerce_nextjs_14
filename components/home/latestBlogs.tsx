import React from "react";
import BlogCard from "./blogCard";
import { PAGES } from "@/constants/pages";
import Link from "../ui/link";
import { useTranslations } from "next-intl";
import Container from "../ui/container";

export default function LatestBlogs({ blogs }: any) {
  const { data } = blogs;
  const t = useTranslations("Common");
  let tReadMore = `${t("read-more")}`;

  return (
    <section className="blog-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-2rem">
        <div className="section-title mb-0">
          {t("latest-blogs")}
        </div>
        <Link href={PAGES.BLOGS} className="see-all">
          {tReadMore}
        </Link>
      </div>
      <div className="row">
        {data.map((blog: any) => {
          return (
            <BlogCard
              key={`blog--key-${blog.id}`}
              tReadMore={tReadMore}
              item={blog}
              href={PAGES.BLOG + "/" + blog.slug}
              className="col-md-4 mb-3"
            />
          );
        })}
      </div>
    </section>
  );
}
