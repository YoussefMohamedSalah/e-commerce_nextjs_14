import React from "react";
import ProductMainDetails from "./ProductMainDetails";
import { productService } from "@/services/product.service";
import { SingleProductType } from "@/types/product";
import ProductsCarouselNormalWrapper from "./ProductsCarouselNormalWrapper";
import ProductFullDetails from "./ProductFullDetails";
import { Session } from "@/types/session";

async function getRelatedByCategory(id: string, lang: string) {
  const response = await productService.getRelatedProductsByCategory(id, lang);
  if (response && response.success) {
    return response.data;
  }
};

async function getRelatedByBrand(id: string, lang: string) {
  const response = await productService.getRelatedProductsByBrand(id, lang);
  if (response && response.success) {
    return response.data;
  }
};

interface Props {
  data: SingleProductType;
  lang: string;
  tProduct: any;
  session: Session | null;
};

export default async function SingleProduct({ data, lang, tProduct, session }: Props) {
  const { category, brand } = data;
  const relatedDataByCategory = await getRelatedByCategory(category?.slug!, lang);
  const relatedDataByBrand = await getRelatedByBrand(brand?.slug!, lang);

  return (
    <section className="single-product-page">
      <ProductMainDetails tProduct={tProduct} product={data} session={session ? session : null} />
      <ProductFullDetails tProduct={tProduct} product={data} session={session ? session : null} />
      {/* More From Same Category */}
      {relatedDataByCategory &&
        <ProductsCarouselNormalWrapper tProduct={tProduct} data={relatedDataByCategory} title={`${tProduct.you_may_like}`} session={session ? session : null} />
      }
      {/* More From Same Brand */}
      {relatedDataByBrand &&
        <ProductsCarouselNormalWrapper tProduct={tProduct} data={relatedDataByBrand} title={`${tProduct.more_from} ${brand?.name!}`} session={session ? session : null} />
      }
    </section>
  );
}
