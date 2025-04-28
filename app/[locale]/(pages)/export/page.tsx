import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { ExportAdvantages, ExportHero, ExportProducts } from '@components/export';
import { Certification } from '@components/main';

import { EXPORT_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('export');

    return getMetadata({
        description: t('metadata.desc'),
        keywords: t.raw('metadata.keywords') as string[],
        locale,
        path: EXPORT_ROUTE,
        title: t('metadata.title'),
    });
}

export default function ExportPage() {
    return (
        <>
            <ExportHero />
            <ExportProducts />
            <Certification />
            <ExportAdvantages />
        </>
    );
}
