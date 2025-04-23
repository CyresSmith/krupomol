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
    const { category } = await params;
    const locale = await getLocale();
    const t = await getTranslations('products');

    return getMetadata({
        description: t(`${category}.metadata.desc`) ?? t(`${category}.metadata.desc`),
        keywords: t.raw(`${category}.metadata.keywords`) as string[],
        locale,
        path: `${PRODUCTS_ROUTE}/${category}`,
        title: t(`${category}.metadata.title`),
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
