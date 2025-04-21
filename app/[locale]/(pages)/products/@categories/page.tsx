import { getLocale } from 'next-intl/server';

import products from '@products';

import { ProductCategoryList } from '@components/products';

import { TitleType } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

const AllCategoryList = async () => {
    const locale = await getLocale();

    const items = Object.entries(products).map(([key, value]) => ({
        href: `${PRODUCTS_ROUTE}/${key}`,
        title: (value.title as TitleType)[locale],
    }));

    return <ProductCategoryList items={items} />;
};

export default AllCategoryList;
