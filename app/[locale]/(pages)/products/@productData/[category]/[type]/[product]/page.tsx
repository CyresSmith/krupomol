import products from '@products';

import { ProductInfo } from '@components/products/product-info';

import { ProductType, WithParams } from '@types';

const ProductData = async ({
    params,
}: WithParams<{ category: string; product: string; type: string }>) => {
    const { category, product, type } = await params;

    const item = products[category as keyof typeof products]?.items[type][product];

    return item ? (
        <div className="bg-gray-color py-16 tablet:py-20 desktop:py-24">
            <ProductInfo {...(item as ProductType)} />
        </div>
    ) : null;
};

export default ProductData;
