import React from "react";
import Link from "@/components/ui/link";
import Image from "@/components/ui/image";

export default function Logo() {
  return (
    <div className="logo">
      <Link className="d-block" href="/">
        <Image
          src="/assets/logo.png"
          width={76}
          height={74}
          className="img-fluid"
          alt="Site logo"
        />
      </Link>
    </div>
  );
}
