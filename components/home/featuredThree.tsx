import React from "react";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";
import Container from "../ui/container";

interface Props {
  data: any;
}

export default function FeaturedThree({ data }: Props) {
  const { banners } = data;

  return (
    <section className="promotions mb-5">
        <div className="promotions-wrapper d-flex align-items-center">
        {banners?.map((banner: any) => {
            return (
                <Link href={banner.url} key={`banner--key-${banner.id}`}>
                  <Image
                    src={banner.image}
                    alt={`${banner.image}`}
                    className="img-fluid"
                    width={500}
                    height={250}
                  />
                </Link>
            );
          })}
        </div>
    </section>
  );
}
