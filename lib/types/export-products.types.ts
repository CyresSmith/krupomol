import { Locale } from 'next-intl';

export type ExportProductsTitleType = Record<Locale, string>;

export type ExportProductsTextArrayType = Record<Locale, string[]>;

export type ExportCategories = 'feed-additives' | 'grains' | 'oilseeds' | 'pmvs';

export interface ExportProductType {
    addInfo: ExportProductsTextArrayType;
    id: string;
    title: ExportProductsTitleType;
}

export interface ExportProductsType {
    products: ExportProductType[];
}
