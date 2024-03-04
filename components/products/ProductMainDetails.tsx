import React from "react";
import ShareProduct from "./ShareProduct";
import { SingleProductType } from "@/types/product";
import ProductActionsBtn from "./ProductActionsBtn";
import ProductHeartBtn from "../common/productHeartBtn";
import { useTranslations } from "next-intl";
import Link from "../ui/link";
import Image from "../ui/image";
import SingleProductSyncCarousel from "./SingleProductSyncCarousel";
import { PAGES } from "@/constants/pages";
import { Session } from "@/types/session";

interface Props {
  product: SingleProductType;
  tProduct: any;
  session: Session | null;
};
// session={session ? session : null}

export default function ProductMainDetails({ product, tProduct, session }: Props) {
  const {
    id,
    name,
    slug,
    is_favourite,
    short_description,
    category,
    brand,
    sku,
    reviews_count,
    reviews_avg,
    price,
    price_after_discount,
    stock,
    media,
    main_option,
    description,
    created_at
  } = product;
  const t = useTranslations("Common");

  const tShare = {
    share_this_product: `${t("share-this-product")}`,
    estimated_delivery: `${t("estimated-delivery")}`,
    free_return_within: `${t("free-return-within")}`,
    secure_shopping: `${t("secure-shopping")}`,
    data_safe: `${t("data-safe")}`,
    days_of: `${t("days-of")}`,
    purchase: `${t("purchase")}`,
    work_days: `${t("work-days")}`,
  };

  return (
    <>
      <div className="bg-white p-4 rounded20">
        <div className="row ">
          <div className="col-md-6 p-4">
            <SingleProductSyncCarousel product={product} />
          </div>

          <div className="col-md-6 p-4">
            <div className="single-product-info-wrapper">
              <div className="d-flex justify-content-between gap-1 mb24">
                <Link
                  href={PAGES.PRODUCTS + "?" + `search=&page=1&per_page=12&orderBy=created_at&orderType=desc&price_from=&price_to=&selections=${brand.id}-${brand.name}-brand`}
                  className="product-brand">
                  <Image
                    src={brand.image}
                    alt={`${brand.name}`}
                    width={100}
                    height={100}
                    className="img-fluid"
                  />
                </Link>
                <ProductHeartBtn product={product} session={session ? session : null} />
              </div>
              <h1 className="product-name mb24">
                {name}
              </h1>

              <div className="d-flex justify-content-between gap-1 mb24">
                <div className="product-rating fz12 text-primary">
                  {reviews_avg} {t("ratings")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.19254 2.14054C7.49144 1.4219 8.50946 1.4219 8.80835 2.14054L10.1963 5.47768L13.7991 5.76651C14.5749 5.8287 14.8895 6.7969 14.2984 7.30323L11.5535 9.65453L12.3921 13.1702C12.5727 13.9272 11.7491 14.5256 11.0849 14.1199L8.00045 12.236L4.91601 14.1199C4.2518 14.5256 3.42821 13.9273 3.6088 13.1702L4.44741 9.65453L1.70251 7.30323C1.11142 6.7969 1.426 5.8287 2.20182 5.76651L5.80455 5.47768L7.19254 2.14054Z"
                      fill="#FFA800"
                    />
                  </svg>
                </div>
                <div className="stock">
                  {stock
                    ? <span className="in-stock fz14 fw-500">
                      {t("in-stock")}
                    </span>
                    : <span className="btn out-of-stock fz14 fw-500">
                      {" "}{t("out-of-stock")}
                    </span>}
                </div>
              </div>

              <div className="product-price fw-600 fz20 text-primary mb24">
                KWD {Number(price).toFixed(2)}
              </div>

              <div className="sku-wrapper mt-4">
                <span className="pe-2 pt-1 fw-600 d">{tProduct.sku} :</span>
                <strong className="badge rounded-pill bg-primary">
                  {sku}
                </strong>
              </div>
              <ProductActionsBtn product={product} tProduct={tProduct} session={session ? session : null} />
              <ShareProduct tShare={tShare} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
