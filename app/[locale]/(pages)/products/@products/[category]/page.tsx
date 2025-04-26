import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductList } from '@components/products';

import { WithParams } from '@types';

const CategoryProductsList = async ({ params }: WithParams<{ category: string }>) => {
    const { category } = await params;

    const locale = await getLocale();

    const items = ProductsService.getProductsList({ categorySlug: category, locale });

    return <ProductList items={items} />;
};

export default CategoryProductsList;
