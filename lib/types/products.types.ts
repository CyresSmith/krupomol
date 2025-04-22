import { Locale } from 'next-intl';

export interface ProductItemType {
    image: string;
    text: string;
    title: string;
}

export type GROATS_NAME = 'barley' | 'buckwheat' | 'corn' | 'millet' | 'pea' | 'wheat';

export type TitleType = Record<Locale, string>;

export interface ProductsData {
    items: Record<string, { string: ProductType }>;
    title: TitleType;
}

export interface ProductType {
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
    title: TitleType;
}

export type ProductTypeKeys = keyof Omit<ProductType, 'title'>;
