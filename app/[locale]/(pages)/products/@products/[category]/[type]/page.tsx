import { getLocale } from 'next-intl/server';

import products from '@products';

import { ProductList } from '@components/products';

import { CardLinkItem, ProductCategoryType, ProductType, WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getProductImage } from '@utils';

const TypeProductsList = async ({ params }: WithParams<{ category: string; type: string }>) => {
    const { category, type } = await params;

    const locale = await getLocale();

    const items = Object.entries(
        products[category as ProductCategoryType].items[
            type as keyof (typeof products)[ProductCategoryType]['items']
        ] as Record<string, ProductType>
    ).reduce((acc: CardLinkItem[], [slug, value]) => {
        const { image, title } = value;

        if (image && title) {
            acc.push({
                href: `${PRODUCTS_ROUTE}/${category}/${type}/${slug}`,
                image: getProductImage(image),
                title: title[locale],
            });
        }

        return acc;
    }, []);

    return <ProductList items={items} />;
};

export default TypeProductsList;
