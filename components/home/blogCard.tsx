import React from 'react';
import { LinkProps } from "next/link";
import Image from '@/components/ui/image';
import Link from '@/components/ui/link';
import cn from "classnames";


interface Props {
    item: any;
    href: LinkProps["href"];
    className?: string;
    tReadMore: any;
};

export default function BlogCard({ item, href, className, tReadMore }: Props) {
    const { slug, image, title, views, created_at } = item ?? {};

    return (
        <div className={cn(className)}>
            <div className="single-blog-post">
                <div className="post-thumbnail">
                    <Link href={href}>
                        <Image
                            src={image ?? '/assets/placeholders/blog-img-demo.png'}
                            width={500}
                            height={500}
                            className="img-fluid" alt={`${slug}`} />
                    </Link>
                </div>
                <h4 className="post-title">
                    <Link href={href}>{title}</Link></h4>
                <div className="d-flex justify-content-between align-items-center">
                    <Link href={href} className="read-more">{tReadMore}</Link>
                    <div className="fz13 text-black-50 fw-normal">{created_at}</div>
                </div>
            </div>
        </div>
    )
}
