"use client"
import Link from "@/components/ui/link";
import Image from "@/components/ui/image";
import { LinkProps } from "next/link";
import cn from "classnames";

interface Props {
	item: any;
	href: LinkProps["href"];
	className?: string;
};

const BrandCard: React.FC<Props> = ({ item, href, className }) => {
	const { name, image } = item ?? {};

	return (
		<Link href={href} className={cn(className)}>
			<Image
					src={image}
					alt={name}
					width={500}
					height={500}
					quality={100}
					className="img-fluid"
					loading="eager"
				/>
		</Link>
	);
};

export default BrandCard;
