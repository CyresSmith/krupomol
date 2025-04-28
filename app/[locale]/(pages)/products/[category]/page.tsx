import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { WithParams } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata({
    params,
}: WithParams<{ category: string }>): Promise<Metadata> {
    const { category } = await params;
    const locale = await getLocale();
    const t = await getTranslations('products');

    const name = ProductsService.getCategoryName({
        categorySlug: category,
        locale,
    });

    return getMetadata({
        description: t('categoryMetadata.desc', { category: name }),
        keywords: t.raw('categoryMetadata.keywords') as string[],
        locale,
        path: `${PRODUCTS_ROUTE}/${category}`,
        title: t('categoryMetadata.title', { category: name }),
    });
}

export function generateStaticParams() {
    return ProductsService.generateParams('category');
}

const Page = () => null;

export default Page;
