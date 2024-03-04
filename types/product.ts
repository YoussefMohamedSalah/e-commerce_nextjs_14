export interface Product {
    id: number;
    name: string;
    category: { id: number, name: string };
    brand: { id: number, name: string };
    reviews_count: number;
    sku: string;
    reviews_avg: string;
    price: number;
    stock: boolean;
    is_favourite: boolean;
    product_has_options: boolean;
    media: ProductMedia;
    slug: string;
    created_at: string;
};

export interface SingleProductType {
    id: number;
    name: string;
    category: { id: number, name: string, slug: string, icon: string };
    brand: { id: number, slug: string, name: string, image: string, image_400: string, image_800: string };
    reviews_count: number;
    sku: string;
    reviews_avg: string;
    price: number;
    stock: boolean;
    is_favourite: boolean;
    product_has_options: boolean;
    media: ProductMedia[];
    slug: string;
    created_at: string;
    short_description: string;
    price_after_discount: number;
    main_option: MainOptionType;
    description: string;
}

export interface MainOptionType {
    id: number,
    options_names_id: string | null,
    price: number,
    cost: number,
    stock: number,
    value: any;
    discount: any;
    discount_type: any;
    product_option_name: ProductOptionName;
    media: ProductMedia[];
}

export interface ProductMedia {
    id: number;
    type: string;
    path: string;
    active: boolean;
    is_main: boolean;
};

export interface ProductOptionName {
    id: number;
    name: string;
    option_tag: { id: number, name: string };
    option_category: { id: number, name: string };
};