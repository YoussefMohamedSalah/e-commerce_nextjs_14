import React from "react";
import Link from "@/components/ui/link";
import Image from "@/components/ui/image";

export default function LogoSmall() {
  return (
    <div className="mobile-logo d-md-none">
      <Link className="d-block" href="/">
        <Image
          src="/assets/logo.png"
          width={37}
          height={35}
          className="img-fluid"
          alt="Site logo"
        />
      </Link>
    </div>
  );
}
