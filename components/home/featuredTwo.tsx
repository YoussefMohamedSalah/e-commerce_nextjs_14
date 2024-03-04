import React from "react";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";

interface Props {
  data: any;
}

export default function FeaturedTwo({ data }: Props) {
  const { banners } = data;
  return (
    <section className="sale-banners mb-5">
      <div className="row">
        {banners?.map((banner: any) => {
          return (
            <div className="col-lg-3 col-md-3 col-6 mb-3 px-lg-2 banner" key={`banner--key-${banner.id}`}>
              <Link href={banner.url}>
                <Image
                  src={banner.image}
                  alt={`${banner.image}`}
                  className="img-fluid"
                  width={400}
                  height={400}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
