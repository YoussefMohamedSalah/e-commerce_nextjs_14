import React from "react";
import BlogCard from "./blogCard";
import { PAGES } from "@/constants/pages";

interface Props {
  data: any;
}

export default function BlogsGrid({ data }: Props) {
  return (
    <div className="main-blogs">
      {data.map((blog: any) => {
        return (
          <BlogCard
            key={`blog--key-${blog.id}`}
            item={blog}
            href={PAGES.BLOG + "/" + blog.slug}
          />
        );
      })}
    </div>
  );
}
