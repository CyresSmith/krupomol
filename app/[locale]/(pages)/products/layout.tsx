import { PropsWithChildren, ReactNode } from 'react';

import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { Infos, ProductsHero } from '@components/products';
import { Section } from '@components/shared';

import { PRODUCTS_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('products');

    return getMetadata({
        description: t('metadata.desc'),
        keywords: t.raw('metadata.keywords') as string[],
        locale,
        path: PRODUCTS_ROUTE,
        title: t('metadata.title'),
    });
}

interface LayoutProps {
    breadcrumb: ReactNode;
    categories: ReactNode;
    products: ReactNode;
}

const ProductsLayout = ({
    breadcrumb,
    categories,
    children,
    products,
}: PropsWithChildren<LayoutProps>) => {
    return (
        <>
            <ProductsHero />

            <Section className="relative" noPadding>
                {breadcrumb}
                {categories}
                {products}
                {children}
            </Section>
            <Infos />
        </>
    );
};

export default ProductsLayout;
