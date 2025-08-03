export interface IProduct {
    status:   string;
    message:  string;
    products: Product[];
}

export interface Product {
    id:          number;
    title:       string;
    image:       string;
    price:       number;
    description: string;
    brand:       string;
    model:       string;
    color?:      string;
    category:    Category;
    discount?:   number;
    popular?:    boolean;
    onSale?:     boolean;
}

export enum Category {
    Audio = "audio",
    Gaming = "gaming",
    Mobile = "mobile",
    Tv = "tv",
}
