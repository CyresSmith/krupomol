import { getLocale } from 'next-intl/server';

import products from '@products';

import { ProductCategoryList } from '@components/products';

import { TitleType, WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

const ProductCategoriesList = async ({
    params,
}: WithParams<{ category: string; product: string; type: string }>) => {
    const { category } = await params;
    const locale = await getLocale();

    const items = Object.entries(products[category as keyof typeof products].items).map(
        ([slug, value]) => ({
            href: `${PRODUCTS_ROUTE}/${category}/${slug}`,
            title: (value.title as TitleType)[locale],
        })
    );

    return <ProductCategoryList items={items} />;
};

export default ProductCategoriesList;
