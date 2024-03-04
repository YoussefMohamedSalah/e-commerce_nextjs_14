import React from "react";
import Image from "@/components/ui/image";
import Link from "@/components/ui/link";

interface Props {
  title: string;
  description: string;
}

export default function NoItems({ title, description }: Props) {
  return (
    <div className="text-center mb100">
      <Image
        width={150}
        height={150}
        src="/assets/animated-search.gif"
        className="img-fluid mb-3"
        alt="empty"
      />
      <div className="fz24 text-black mb-2">
        {" "}{title}{" "}
      </div>
      <div className="text-black mb-3">
        {description}
      </div>
      <Link href="/" className="btn btn-primary fz16 py-3 px-5">
        Continue shopping
      </Link>
    </div>
  );
}
