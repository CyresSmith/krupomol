import { Locale } from 'next-intl';

import { LinkItem } from './shared.types';

export interface ProductItemType {
    image: string;
    text: string;
    title: string;
}

export type ProductTitleType = Record<Locale, string>;

export interface Product {
    acids: string;
    carbohydrates: string;
    expiration: string;
    fats: string;
    gpCount: string;
    gpWeight: string;
    image: string;
    kcal: string;
    kj: string;
    mass: string;
    package: string;
    protein: string;
    salt: string;
    sugar: string;
    title: ProductTitleType;
}

export type ProductListType = LinkItem & Omit<Product, 'title'>;

export interface ProductType {
    items: Record<string, Product>;
    title: ProductTitleType;
}

export interface ProductCategory {
    items: Record<string, ProductType>;
    title: ProductTitleType;
}

export interface ProductsData {
    items: Record<string, ProductCategory>;
    title: ProductTitleType;
}
