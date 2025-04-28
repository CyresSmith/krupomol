import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductInfo } from '@components/products/product-info';

import { WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata({
    params,
}: WithParams<{ category: string; type: string }>): Promise<Metadata> {
    const { category, type } = await params;
    const locale = await getLocale();
    const t = await getTranslations('products');

    const name = ProductsService.getCategoryName({
        categorySlug: category,
        locale,
        typeSlug: type,
    });

    return getMetadata({
        description: t('productMetadata.desc', { name }),
        keywords: t.raw('productMetadata.keywords') as string[],
        locale,
        path: `${PRODUCTS_ROUTE}/${category}/${type}`,
        title: t('productMetadata.title', { name }),
    });
}

export function generateStaticParams() {
    return ProductsService.generateParams('type');
}

const TypePageProductData = async ({ params }: WithParams<{ category: string; type: string }>) => {
    const { category, type } = await params;
    const locale = await getLocale();

    const products = ProductsService.getProductsList({
        categorySlug: category,
        locale,
        typeSlug: type,
    });

    return products?.[0] ? (
        <div className="bg-gray-color py-16 tablet:py-20 desktop:py-24">
            <ProductInfo {...products[0]} />
        </div>
    ) : null;
};

export default TypePageProductData;
