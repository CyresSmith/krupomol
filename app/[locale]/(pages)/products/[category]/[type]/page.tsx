/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import products from '@products';

import { ProductInfo } from '@components/products/product-info';

import { ProductCategoryType, ProductType, WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata({
    params,
}: WithParams<{ category: string; type: string }>): Promise<Metadata> {
    const { category, type } = await params;
    const locale = await getLocale();
    const t = await getTranslations('products');

    const items = products[category as ProductCategoryType].items as Record<
        string,
        { title: Record<string, string> }
    >;
    const name = items[type]?.title[locale] ?? '';

    return getMetadata({
        description: t('productMetadata.desc', { name }),
        keywords: t.raw('productMetadata.keywords'),
        locale,
        path: `${PRODUCTS_ROUTE}/${category}/${type}`,
        title: t('productMetadata.title', { name }),
    });
}

export function generateStaticParams() {
    return Object.entries(products).reduce(
        (acc: { category: string; type: string }[], [category, values]) => {
            Object.keys(values.items).forEach(type => acc.push({ category, type }));
            return acc;
        },
        []
    );
}

const TypePageProductData = async ({ params }: WithParams<{ category: string; type: string }>) => {
    const { category, type } = await params;

    const categoryItems = products[category as ProductCategoryType]?.items;
    const typeItems = categoryItems ? categoryItems[type as keyof typeof categoryItems] : undefined;
    const item = typeItems
        ? Object.entries(typeItems).find(([key]) => key !== 'title')?.[1]
        : undefined;

    return item ? (
        <div className="bg-gray-color py-16 tablet:py-20 desktop:py-24">
            <ProductInfo {...(item as ProductType)} />
        </div>
    ) : null;
};

export default TypePageProductData;
