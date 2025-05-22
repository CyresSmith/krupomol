import { Locale } from 'next-intl';

import { LinkItem } from './shared.types';

export interface ProductLinkItem {
    href: string;
    image: string;
    title: string;
}

export type ProductTitleType = Record<Locale, string>;

export type ProductType = 'premium' | 'regular' | 'weight';

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
    type: ProductType;
}

export type ProductListItemType = LinkItem & Omit<Product, 'title'>;

export interface ProductItemsType {
    items: Record<string, Product>;
    title: ProductTitleType;
}

export interface ProductCategory {
    items: Record<string, ProductItemsType>;
    title: ProductTitleType;
}

export interface ProductsData {
    items: Record<string, ProductCategory>;
    title: ProductTitleType;
}
