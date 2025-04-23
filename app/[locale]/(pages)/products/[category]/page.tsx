/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import products from '@products';

import { ProductCategoryType, WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata({
    params,
}: WithParams<{ category: string }>): Promise<Metadata> {
    const { category } = await params;
    const locale = await getLocale();
    const t = await getTranslations('products');

    const product = products[category as ProductCategoryType];

    if ('metadata' in product) {
        const metadata = product.metadata[locale];

        return getMetadata({
            description: metadata.desc ?? '',
            keywords: metadata.keywords ?? '',
            locale,
            path: `${PRODUCTS_ROUTE}/${category}`,
            title: metadata.title ?? '',
        });
    } else {
        return getMetadata({
            description: t('metadata.desc'),
            keywords: t.raw('metadata.keywords'),
            locale,
            path: `${PRODUCTS_ROUTE}/${category}`,
            title: t('metadata.title'),
        });
    }
}

export function generateStaticParams() {
    return Object.keys(products);
}

const Page = () => null;

export default Page;
