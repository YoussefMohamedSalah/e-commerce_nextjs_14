import React from "react";
import { productService } from "@/services/product.service";
import SingleProductWrapper from "@/components/products/SingleProductWrapper";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { Session } from "@/types/session";

interface Props {
  params: { locale: string; id: string };
};

export const metadata = {
  title: "Product",
  description: "Page Description"
};

async function getSingleProduct(id: string, lang: string) {
  const response = await productService.getSingleProduct(id, lang);
  if (response && response.success) {
    return response.data;
  }
};

export default async function SingleProductPage({
  params: { locale, id }
}: Props) {
  const session: Session | null = await getServerSession(authConfig);
  const productData = await getSingleProduct(id, locale);

  return (
    <main>
      <SingleProductWrapper data={productData.data} lang={locale} session={session ? session : null} />
    </main>
  );
}
