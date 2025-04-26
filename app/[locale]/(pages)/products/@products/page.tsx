import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductList } from '@components/products';

const AllProductsList = async () => {
    const locale = await getLocale();

    const items = ProductsService.getProductsList({ locale });

    return <ProductList items={items} />;
};

export default AllProductsList;
