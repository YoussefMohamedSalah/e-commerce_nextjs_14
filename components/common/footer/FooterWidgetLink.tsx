import React from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/ui/link";

interface Props {
  className?: string;
  data: {
    id: number;
    name: string;
    links: {
      id: string;
      name: string;
      link: string;
    }[];
  };
}

export default function FooterWidgetLink({ className, data }: Props) {
  const { links, name } = data;

  return (
    <div className={`${className}`}>
      <h6>
        {name}
      </h6>
      <ul className="list-unstyled footer-nav">
        {links.map(link =>
          <li
            key={`widget-link--key${link.id}`}
            className="flex items-baseline"
          >
            <Link href={link.link ? link.link : "#!"}>
              {link.name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
