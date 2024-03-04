import Image from '@/components/ui/image';
import Link from '@/components/ui/link';
import { useTranslations } from 'next-intl';
import { LinkProps } from 'next/link';
import React from 'react'

interface Props {
    item: any;
    href: LinkProps["href"];
    className?: string;
};

export default function BlogCard({ item, href, className }: Props) {
    const t = useTranslations("Common");
    const { slug, image, title, views, created_at } = item ?? {};
    return (
        <div className="single-blog-post">
            <div className="post-thumbnail small">
                <Link href={href}>
                    <Image
                        src={image ?? "/assets/blog-post.png"}
                        className="img-fluid"
                        alt={`${title}`}
                        width={1000}
                        height={1024}
                    />
                </Link>
            </div>
            <h4 className="post-title  ">
                <Link href={href}>
                    {title}
                </Link>
            </h4>
            <div className="d-flex justify-content-between align-items-center">
                <Link href={href} className="read-more">
                    {t("read-more")}
                </Link>
                <div className="fz13 text-black-50  fw-normal">
                    {created_at}
                </div>
            </div>
        </div>
    )
}
