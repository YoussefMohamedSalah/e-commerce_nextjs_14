"use client";
import Image from "next/image";
import Link from "@/components/ui/link";
import cn from "classnames";
import React, { useContext } from "react";
import SiteSettingsContext, { StoreData } from "@/contexts/SiteSettingsContext";

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  type,
  href = "/",
  ...props
}) => {
  const siteSettingsContext = useContext(SiteSettingsContext);
  const { siteSettings } = siteSettingsContext || {};
  return (
    <Link href={href} className={cn(className)} {...props}>
      <Image
        // src={siteSettings?.logo ? `${BASE_API_URL}/${siteSettings?.logo}` : "/assets/footer-logo.png"}
        src={"/assets/footer-logo.png"}
        alt={"Site"}
        height={74}
        width={68}
      />
    </Link>
  );
};

export default Logo;
