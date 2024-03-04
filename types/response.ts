export interface ResponseType {
    success: boolean;
    data: {
        data: any[];
    };
    current_page: number;
    last_page: number;
    items_count: number
}