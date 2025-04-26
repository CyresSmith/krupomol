import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductList } from '@components/products';

import { WithParams } from '@types';

const TypeProductsList = async ({ params }: WithParams<{ category: string; type: string }>) => {
    const { category, type } = await params;

    const locale = await getLocale();

    const items = ProductsService.getProductsList({
        categorySlug: category,
        locale,
        typeSlug: type,
    });

    return <ProductList items={items} />;
};

export default TypeProductsList;
