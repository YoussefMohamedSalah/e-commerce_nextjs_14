"use client"
import Image from "@/components/ui/image";
import cn from "classnames";
import Link from "../ui/link";
import { LinkProps } from "next/link";

interface Props {
	item: any;
	href: LinkProps["href"];
	className?: string;
}

const CategoryCard: React.FC<Props> = ({ item, className, href }) => {
	const { name, image } = item ?? {};

	return (
		<Link href={href} className={cn(className)}>
			<div className="item-img">
				<Image
					src={image ?? '/assets/placeholders/category.png'}
					alt={name}
					width={200}
					height={200}
					quality={100}
					className="img-fluid"
					loading="eager"
				/>
			</div>
			<h5 className="title"> {name} </h5>
		</Link>
	);
};

export default CategoryCard;
