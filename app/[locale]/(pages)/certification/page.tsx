import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';

import { Certificates, CertificatesHero } from '@components/certification';

import { CERTIFICATION_ROUTE } from '@routes';

import { getMetadata } from '@utils';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('certification.metadata');

    return getMetadata({
        description: t('desc'),
        keywords: t.raw('keywords') as string[],
        locale,
        path: CERTIFICATION_ROUTE,
        title: t('title'),
    });
}

export default function Certification() {
    return (
        <>
            <CertificatesHero />
            <Certificates />
        </>
    );
}
