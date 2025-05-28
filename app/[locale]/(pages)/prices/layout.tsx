import { PropsWithChildren, ReactNode } from 'react';

import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { redirect } from '@i18n';

import { PricesHero } from '@components/prices';

import { PRICES_ROUTE } from '@routes';

import { getMetadata } from '@utils';

interface Props extends PropsWithChildren {
    pricesAccordion: ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('prices.metadata');

    return getMetadata({
        description: t('desc'),
        keywords: t.raw('keywords') as string[],
        locale,
        path: PRICES_ROUTE,
        title: t('title'),
    });
}

const PricesLayout = async ({ children, pricesAccordion }: Props) => {
    const locale = await getLocale();

    if (locale !== 'uk') return redirect({ href: '/', locale });

    return (
        <>
            <PricesHero />
            {pricesAccordion}
            {children}
        </>
    );
};

export default PricesLayout;
