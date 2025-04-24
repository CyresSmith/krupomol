import { getLocale } from 'next-intl/server';

import products from '@products';

import { ProductList } from '@components/products';

import { ProductType } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getProductImage } from '@utils';

const AllProductsList = async () => {
    const locale = await getLocale();

    const items = Object.entries(products).reduce(
        (acc: { href: string; image: string; title: string }[], [category, categoryData]) => {
            Object.entries(categoryData.items).forEach(([type, products]) => {
                Object.entries(products).forEach(([key, value]) => {
                    const { image, title } = value as ProductType;

                    if (image && title) {
                        acc.push({
                            href: `${PRODUCTS_ROUTE}/${category}/${type}/${key}`,
                            image: getProductImage(image),
                            title: title[locale],
                        });
                    }
                });
            });

            return acc;
        },
        []
    );

    return <ProductList items={items} />;
};

export default AllProductsList;
