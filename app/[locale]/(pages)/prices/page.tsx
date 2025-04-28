import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { redirect } from '@i18n';

import { Cooperation, EmptyBg, Payment, PricesHero } from '@components/prices';
import { PricesAccordion } from '@components/prices/prices-accordion/prices-accordion';

import { PRICES_ROUTE } from '@routes';

import { getMetadata } from '@utils';

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

export default async function Prices() {
    const locale = await getLocale();

    if (locale !== 'uk') return redirect({ href: '/', locale });

    return (
        <>
            <PricesHero />
            <PricesAccordion />
            <Cooperation />
            <EmptyBg />
            <Payment />
        </>
    );
}
