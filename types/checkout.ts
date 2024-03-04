type ProductImage = {
    active: boolean;
    id: number;
    is_main: boolean;
    path: string;
    path_400: string;
    type: string;
};

type Product = {
    has_discount: boolean;
    id: number;
    media: ProductImage[];
    name: string;
    price: number;
    price_after_discount: number;
    slug: string;
    stock: number;
};

type CartItem = {
    id: number;
    is_valid_quantity: boolean;
    item_total: number;
    item_total_after_discount: number;
    product: Product;
    quantity: number;
};

type CartData = {
    addresses: any[]; // Update the type if you have information about addresses
    can_checkout: boolean;
    cart: CartItem[];
    cart_total: number;
    delivery_time: string;
    discount: number;
    order_has_discount: boolean;
    shipping_fees: number;
    sub_total: number;
    tax: number;
    total: number;
    wallet: number;
};

export default CartData;
