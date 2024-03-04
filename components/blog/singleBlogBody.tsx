"use client";
import HTMLParser from "@/utils/HTMLParser";
import React from "react";

interface Props {
  content: string;
}

const SingleBlogBody = ({ content }: Props) => {
  return (
    <div className="post-content fz18 text-black lh-lg mb100">
      {HTMLParser(content)}
    </div>
  );
};

export default SingleBlogBody;
