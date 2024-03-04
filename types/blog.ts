export interface BlogRes {
    data: Blog[];
    current_page: number;
    last_page: number;
    items_count: number;
};

export interface Blog {
    id: number;
    slug: string;
    image: string;
    title: string;
    views: number;
    category: { id: number, slug: string, name: string };
    create_at: string
};