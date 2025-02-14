import { Types } from 'mongoose';

export interface ProductDto {
    title: string;
    price: number;
    discount?: number;
    tag: string[];
    flashSale?: boolean;
    status: 'Show' | 'Hide';
    children: string;
    description?: string;
    image: string;
    originalPrice: number;
    parent: string// Reference to Category
    quantity: number;
    slug: string;
    type: string;
    unit?: string;
    sku?: string;
    __v?: number;
}
