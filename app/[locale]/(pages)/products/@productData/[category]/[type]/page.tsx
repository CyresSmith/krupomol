import products from '@products';

import { ProductInfo } from '@components/products/product-info';

import { ProductType, WithParams } from '@types';

const TypePageProductData = async ({ params }: WithParams<{ category: string; type: string }>) => {
    const { category, type } = await params;

    const item = Object.entries((products[category as keyof typeof products]?.items)[type]).find(
        ([key]) => key !== 'title'
    )[1];

    return item ? (
        <div className="bg-gray-color py-16 tablet:py-20 desktop:py-24">
            <ProductInfo {...(item as ProductType)} />
        </div>
    ) : null;
};

export default TypePageProductData;
