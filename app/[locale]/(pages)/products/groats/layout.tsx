import { PropsWithChildren } from 'react';

import { getTranslations } from 'next-intl/server';

import products from '@products/groats.json';

import { ProductTypeList } from '@components/products/products-info/product-type-list';
import { Section } from '@components/shared';

import { GROATS_ROUTE, PRODUCTS_ROUTE } from '@routes';

export default async function Groats({ children }: PropsWithChildren) {
    const t = await getTranslations('products');

    const items = products
        ? Object.keys(products).map(key => ({
              href: `${PRODUCTS_ROUTE}${GROATS_ROUTE}/${key}`,
              title: t(`groats.${key}`),
          }))
        : [];

    return (
        <Section>
            <div className="container">
                <ProductTypeList items={items} />
                {children}
            </div>
        </Section>
    );
}
