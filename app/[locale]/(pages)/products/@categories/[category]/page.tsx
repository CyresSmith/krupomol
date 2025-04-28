import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductCategoryList } from '@components/products';

import { WithParams } from '@types';

const CategoryCategoriesList = async ({ params }: WithParams<{ category: string }>) => {
    const { category } = await params;
    const locale = await getLocale();

    const types = ProductsService.getTypesByCategory(category, locale);

    return <ProductCategoryList items={types} />;
};

export default CategoryCategoriesList;
