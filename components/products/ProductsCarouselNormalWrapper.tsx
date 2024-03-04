import React from "react";
import ProductsCarouselNormal from "./ProductsCarouselNormal";
import { Session } from "@/types/session";

interface Props {
  data: any;
  title: string;
  tProduct: any;
  session: Session | null;
};

export default function ProductsCarouselNormalWrapper({
  data,
  title,
  tProduct,
  session
}: Props) {
  return (
    <section className="featured-products products-slider mb-5">
      <ProductsCarouselNormal data={data} title={title} tProduct={tProduct} session={session ? session : null} />
    </section>
  );
}
