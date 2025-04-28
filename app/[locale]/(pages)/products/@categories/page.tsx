import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductCategoryList } from '@components/products';

const AllCategoryList = async () => {
    const locale = await getLocale();

    const categories = ProductsService.getCategories(locale);

    return <ProductCategoryList items={categories} />;
};

export default AllCategoryList;
