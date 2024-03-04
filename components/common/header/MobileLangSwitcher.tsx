"use client";
import React from "react";
import { usePathname, useRouter } from "../../../app/navigation";
import Link from "@/components/ui/link";
import LanguageIcon from "@/components/svg/languageSvg";

interface Props {
  lang: string;
  fillColor?: string;
}

export default function MobileLangSwitcher({ lang, fillColor }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    router.push(pathname, { locale: lang });
  };
  return (
    <li className="list-inline-item" style={{ zIndex: 99999 }}>
      <div className="dropdown">
        <a
          href="#"
          data-bs-display="static"
          role="button"
          data-bs-toggle="dropdown"
          style={{ color: "white" }}
          className="d-flex gap-2"
        >
          {lang}
          <LanguageIcon />
        </a>
        <ul className="dropdown-menu">
          <li onClick={() => handleChange("en")}>
            <Link className="dropdown-item pointer position-relative d-flex ms-auto" href="#">
              English
            </Link>
          </li>
          <li onClick={() => handleChange("ar")}>
            <Link className="dropdown-item pointer position-relative d-flex ms-auto" href="#">
              العربية
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
}
