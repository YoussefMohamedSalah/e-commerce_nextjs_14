export interface CreateOrderTerms {
    city_id: number;
    country_id: number;
    region: string;
    street: string;
    building: string;
    zip_code: string;
    phone: number;
    use_wallet: number;
    payment_method_id: number;
};


export interface OrderHistoryRes {
    data: any[];
    current_page: number;
    last_page: number;
    items_count: number;
};