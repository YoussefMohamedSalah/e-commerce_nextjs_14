import React from "react";
import AllBlogs from "@/components/blog/allBlogs";
import { blogService } from "@/services/blog.service";

interface Props {
  params: { locale: string };
}

export const metadata = {
  title: "Blogs",
  description: "Page Description"
};

async function getAllBlogs(lang: string) {
  const response = await blogService.getAllBlogs(lang);
  if (response && response.success) {
    return response.data;
  }
}

export default async function BlogsPage({ params: { locale } }: Props) {
  const blogsData = await getAllBlogs(locale);

  return (
    <main>
      <AllBlogs data={blogsData.data} related={blogsData.data} />
    </main>
  );
}
