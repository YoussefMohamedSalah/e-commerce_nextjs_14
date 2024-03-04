import React from "react";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";

interface Props {
  data: any;
}

export default function TwoWideBanners({ data }: Props) {
  const { banners } = data;
  return (
    <section className="sale-banners mb-5">
        <div className="d-flex gap-2rem flex-column">
          {banners?.map((banner: any, index:number) => {
            return (
              <div key={`banner--key-${index}`}>
                <Link href={banner.url}>
                  <Image
                    src={banner.image}
                    alt={`${banner.image}`}
                    className="img-fluid rounded10"
                    width={2000}
                    height={2000}
                  />
                </Link>
              </div>
            );
          })}
        </div>
    </section>
  );
}