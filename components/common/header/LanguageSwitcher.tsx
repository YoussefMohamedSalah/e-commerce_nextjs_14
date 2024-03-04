"use client";

import Image from "@/components/ui/image";
import { usePathname, useRouter } from "../../../app/navigation";
import React from "react";
interface Props {
  lang: string;
}

export default function LanguageSwitcher({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    router.push(pathname, { locale: lang });
  };
  return (
    <li style={{ zIndex: 99999 }}>
      {lang === "ar"
        ? <li
          role='button'
          className="fz16 border-0 bg-transparent"
          onClick={() => handleChange("en")}
        >
          <Image width={10} height={10} src="/assets/en.png" className="flag-icon img-fluid ms-1" alt="English" />
          English
        </li>
        : <li
          role='button'
          className="fz16 border-0 bg-transparent"
          onClick={() => handleChange("ar")}
        >
          <Image width={10} height={10} src="/assets/ar.png" className="flag-icon img-fluid me-1" alt="Arabic" />
          العربية
        </li>}
    </li>
  );
}
