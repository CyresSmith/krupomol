import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductCategoryList } from '@components/products';

import { WithParams } from '@types';

const ProductCategoriesList = async ({
    params,
}: WithParams<{ category: string; product: string; type: string }>) => {
    const { category } = await params;
    const locale = await getLocale();

    const items = ProductsService.getTypesByCategory(category, locale);

    return <ProductCategoryList items={items} />;
};

export default ProductCategoriesList;
