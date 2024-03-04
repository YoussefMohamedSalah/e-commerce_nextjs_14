import React, { useEffect, useState } from "react";
import { LinkProps } from "next/link";
import Link from "@/components/ui/link";
import Image from "@/components/ui/image";
import ProductHeartBtn from "./productHeartBtn";
import { Product } from '@/types/product';
import AddToCartBtn from './AddToCartBtn';
import { RandomData } from "@/constants/random";
import { Session } from "@/types/session";

interface Props {
  item: Product;
  href: LinkProps["href"];
  className?: string;
  tProduct: any;
  session: Session | null;
};

export default function ProductCardSmall({ item, href, className, tProduct, session }: Props) {
  const { id, name, reviews_avg, reviews_count, price, media } = item ?? {};


  const getRandomLabel = (id: number) => {
    let stringId = String(id).split('');
    let selectedId = stringId[3] ? stringId[3] : stringId[2]

    if (!selectedId) selectedId = stringId[1] || '0'
    // Apply your conditions based on the ID
    if (Number(selectedId) === 2 || Number(selectedId) === 6 || Number(selectedId) === 8) {
      return RandomData[0]; // Sale
    } else if (Number(selectedId) === 5 || Number(selectedId) === 3 || Number(selectedId) === 1) {
      return RandomData[1]; // Trending
    } else {
      return RandomData[2]; // Best Seller
    }
  };
  const [randomShipContent, setRandomShipContent] = useState<{ title: string, color: string }>({ title: '', color: '' });

  useEffect(() => {
    // Generate the random ship content based on the ID once on component mount
    const randomContent = getRandomLabel(id);
    setRandomShipContent(randomContent);
  }, [id]); // Re-run effect when the ID changes

  return (
    <div className={`${className}`}>
      <div className="single-product-wrapper">
        <div className="top-icons">
          <div className="badge rounded-pill float-start" style={{ backgroundColor: `${randomShipContent.color}` }}>
            {randomShipContent.title}
          </div>
          <ProductHeartBtn product={item} session={session ? session : null} />
        </div>
        <div className="item-img">
          <Link href={href}>
            <Image
              alt=""
              className="img-fluid"
              loading="eager"
              src={media?.path! ?? ''}
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="product-title">
          <Link href={href}>
            {name}
          </Link>
        </div>

        <div className="product-rate mb-0">
          <span className="rate-ratio">{reviews_avg || 0}★</span> {reviews_count && reviews_count}
        </div>

        <div className="item-price" >
          KWD {price ? price : 0}
          {/* {oldPrice &&
            <div className="old-price">{oldPrice && `EGP ${oldPrice}`}</div>
          } */}
        </div>

        <AddToCartBtn product={item} tProduct={tProduct} session={session ? session : null} />

      </div>
    </div>
  );
}
