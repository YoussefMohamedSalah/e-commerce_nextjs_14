import React, { useEffect, useState } from "react";
import { PAGES } from "@/constants/pages";
import InfiniteScroll from "react-infinite-scroll-component";
import { Product } from "@/types/product";
import { BASE_API_URL } from "@/constants/baseUrl";
import { ROUTES } from "@/constants/routes";
import dynamic from "next/dynamic";
import { UrlParams } from "@/app/[locale]/(site)/products/page";
import NoResult from "./NoResult";
import { Session } from "@/types/session";

const ProductCardSmall = dynamic(() =>
	import("../../components/common/productCardSmall")
);

interface Props {
	data: { data: Product[], current_page: number, items_count: number, last_page: number };
	tProduct: any;
	searchParams: UrlParams;
	lang: string;
	session: Session | null;
};

const SearchedProducts: React.FC<Props> = ({
	data,
	tProduct,
	searchParams,
	lang,
	session
}) => {
	const [products, setProducts] = useState<Product[]>(data.data || {});
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [hasMore, setHasMore] = useState<boolean>(true);

	useEffect(
		() => {
			setProducts([...data.data]);
			setCurrentPage(1);
		},
		[data]
	);

	const serializeSelections = (selections: string) => {
		if (selections) {
			const selectionArray = selections?.split(",").map(item => item.trim());
			let categories: string[] = [];
			let brands: string[] = [];
			let categoriesString = "";
			let brandsString = "";

			selectionArray.forEach(selection => {
				// Replace spaces with dashes
				const stripedText = selection?.replace(/\s+/g, "-");
				let textArr = stripedText.split("-");

				// Check the last element of textArr
				let lastWord = textArr[textArr.length - 1];

				if (lastWord === "brand") {
					brands.push(stripedText);
				} else if (lastWord === "category") {
					categories.push(stripedText);
				} else {
					return null;
				}
			});

			categories.forEach(category => {
				const categoryId = category.split("-")[0];
				categoriesString += `&categories[]=${categoryId}`;
			});

			brands.forEach(brand => {
				const brandId = brand.split("-")[0];
				brandsString += `&brands[]=${brandId}`;
			});

			return `${categoriesString}${brandsString}`;
		} else return "";
	};

	async function getMoreProducts() {
		const nextPageNumber = currentPage + 1;
		setCurrentPage(nextPageNumber);

		const urlParams: UrlParams = {
			search: searchParams.search || '',
			page: nextPageNumber,
			per_page: searchParams.per_page || '12',
			orderBy: searchParams.orderBy || '',
			orderType: searchParams.orderType || '',
			price_from: searchParams.price_from || '',
			price_to: searchParams.price_to || '',
			selections: searchParams.selections || ''
		};

		let baseFilterString = '';
		for (const key in urlParams) {
			if (Object.prototype.hasOwnProperty.call(urlParams, key)) {
				const item = urlParams[key];
				if (key === "selections") {
					let serialized = serializeSelections(item);
					baseFilterString = baseFilterString + `${serialized}`;
				}
				else {
					baseFilterString = baseFilterString + `&${key}=${item ? item : ''}`;
				}
			}
		}

		if (baseFilterString.startsWith("&")) baseFilterString = baseFilterString.slice(1);

		try {
			const response = await fetch(
				`${BASE_API_URL}${ROUTES.PRODUCT_ENDPOINT}?${baseFilterString}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Accept-Language": `${lang}`
					},
				}
			);
			let data = await response.json()
			return data;
		} catch (error) {
			console.error("Error in getAllProducts:", error);
		}
	};

	const fetchMoreData = async () => {
		const nextPage = currentPage + 1;
		if (nextPage <= data.last_page) {
			try {
				const response = await getMoreProducts();
				// Check if response contains data property
				if (response && response.data && Array.isArray(response.data.data)) {
					// Update products state with new data
					setProducts([...products, ...response.data.data]);
					setCurrentPage(nextPage);
				} else {
					console.error("Invalid response format:", response);
				}
			} catch (error) {
				console.log("Error fetching more data:", error);
			}
		} else {
			// No more data to fetch
			setHasMore(false);
		}
	};

	return (
		<div className="products-results mt-4">
			{products.length > 0 ? (
				<InfiniteScroll
					dataLength={products.length}
					next={fetchMoreData}
					hasMore={hasMore}
					loader={<h4></h4>}
					endMessage={<p>No more results</p>}
				// style={{ overflow: "none" }}
				>
					<div className="row">
						{products.map((product, index) =>
							<div
								key={`product-${product.id}-${index}`}
								className="col-6 mb24 col-md-3"
							>
								<ProductCardSmall
									tProduct={tProduct}
									item={product}
									href={`${PAGES.PRODUCTS}/${product.slug}`}
									className=""
									session={session ? session : null}
								/>
							</div>
						)}
					</div>
				</InfiniteScroll>
			) : (
				<NoResult />
			)}
			<div>Showing {products.length} items of {data.items_count}</div>
		</div>
	);
};

export default SearchedProducts;
