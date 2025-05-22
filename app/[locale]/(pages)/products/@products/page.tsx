import { getLocale, getTranslations } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductTypeSection } from '@components/products/product-type-section';

import { ProductType } from '@types';

import { sortProductsByType } from '@utils';

const AllProductsList = async () => {
    const locale = await getLocale();
    const t = await getTranslations('products.type');

    const items = Object.entries(sortProductsByType(ProductsService.getProductsList({ locale })));

    return (
        <div className="flex flex-col gap-14">
            {items.map(([title, items]) => (
                <ProductTypeSection
                    id={title}
                    items={items}
                    key={title}
                    title={t(title as ProductType)}
                />
            ))}
        </div>
    );
};

export default AllProductsList;
