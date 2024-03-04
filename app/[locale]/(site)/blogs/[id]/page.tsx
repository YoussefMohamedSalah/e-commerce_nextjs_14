import React from "react";
import SingleBlog from "@/components/blog/singleBlog";
import { blogService } from "@/services/blog.service";

interface Props {
  params: { locale: string; id: string };
}

export const metadata = {
  title: "Blog",
  description: "Page Description"
};

async function getSingleBlog(id: string, locale: string) {
  const response = await blogService.getSingleBlog(id, locale);
  if (response && response.success) {
    return response.data;
  }
}

async function getRelatedBlogs(id: string, locale: string) {
  const response = await blogService.getRelatedBlogs(id, locale);
  if (response && response.success) {
    return response.data;
  }
}

export default async function BlogDetails({ params: { locale, id } }: Props) {
  const blogDetails = await getSingleBlog(id, locale);
  const relatedBlogs = await getRelatedBlogs(id, locale);

  return (
    <main>
      <SingleBlog data={blogDetails} related={relatedBlogs} />
    </main>
  );
}
