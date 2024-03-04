"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "@/components/ui/link";

type BreadCrumbProps = {
  homeElement: ReactNode;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({ homeElement, capitalizeLinks }: BreadCrumbProps) => {
  const paths = usePathname();
  let url = paths.replace("/ar", "");
  const pathNames = url.split("/").filter(path => path);

  return (
    <div className="breadcrumbs">
      <ul className="list-unstyled d-flex">
        <li>
          <Link href={"/"}>
            {homeElement}
          </Link>
        </li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <li key={index}>
              <Link href={href}>
                {itemLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
