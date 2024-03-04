import { ProductMedia } from "./product";

export interface ProductAddToCart {
    product_id: number;
    quantity: number;
    product_options: number[];
};

export interface CartRes {
    sub_total: number;
    discount: number;
    productDiscount: number;
    discount_id: any;
    total: number;
    order_has_discount: boolean;
    data: CartItem[];
}

export interface CartItem {
    id: number;
    quantity: number;
    product: CartProduct;
    price: number;
    item_total: number;
};

export interface FavoriteItem {
    id: number;
};

export interface CartProduct {
    id: number;
    name: string;
    price: number;
    stock: boolean;
    media: ProductMedia[];
};