import { getLocale } from 'next-intl/server';

import products from '@products';

import { ProductList } from '@components/products';

import { CardLinkItem, ProductType, WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getProductImage } from '@utils';

const CategoryProductsList = async ({ params }: WithParams<{ category: string }>) => {
    const { category } = await params;

    const locale = await getLocale();

    const items = Object.entries(products[category as keyof typeof products].items).reduce(
        (acc: CardLinkItem[], [type, typeValue]) => {
            Object.entries(typeValue as ProductType).forEach(([key, value]) => {
                const { image, title } = value as ProductType;

                if (image && title) {
                    acc.push({
                        href: `${PRODUCTS_ROUTE}/${category}/${type}/${key}`,
                        image: getProductImage(image),
                        title: title[locale],
                    });
                }
            });

            return acc;
        },
        []
    );

    return <ProductList items={items} />;
};

export default CategoryProductsList;
