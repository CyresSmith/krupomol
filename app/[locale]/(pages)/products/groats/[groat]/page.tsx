import { getLocale } from 'next-intl/server';

import products from '@products/groats.json';

import { ProductInfo } from '@components/products';
import { ProductsList } from '@components/products/products-info';

import { GROATS_NAME, WithParams } from '@types';

import { GROATS_ROUTE, PRODUCTS_ROUTE } from '@routes';

export default async function GroatPage({ params }: WithParams<{ groat: string }>) {
    const locale = await getLocale();
    console.log('🚀 ~ GroatPage ~ locale:', locale);

    const { groat } = await params;

    const items = products
        ? products[groat as GROATS_NAME].map(({ image, slug, title }) => ({
              href: `${PRODUCTS_ROUTE}${GROATS_ROUTE}/${slug}`,
              image,
              title: title[locale],
          }))
        : [];

    return (
        <>
            <ProductsList items={items} />
            <ProductInfo />
        </>
    );
}
