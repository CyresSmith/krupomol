import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import '../globals.css';

import { sharedMetadata } from '@shared-metadata';

import { routing } from '@i18n';

import { ScrollToTop } from '@components/shared';

import { WithLocale, WithParams } from '@types';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('head');

    return {
        ...sharedMetadata,
        description: t('desc'),
        openGraph: {
            ...sharedMetadata.openGraph,
            description: t('desc'),
            locale: locale === 'en' ? 'en_US' : 'uk_Ua',
            title: t('title'),
        } as Metadata['openGraph'],
        title: t('title'),
    } as Metadata;
}

export function generateStaticParams() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
    children,
    params,
}: PropsWithChildren & WithParams<WithLocale>) {
    const p = await params;

    if (!hasLocale(routing.locales, p.locale)) notFound();

    setRequestLocale(p.locale);

    return (
        <html className="!scroll-smooth" lang={p.locale}>
            <head>
                <link href="/favicon.ico" rel="icon" sizes="48x48" />
                <link href="/favicon.svg" rel="icon" sizes="any" type="image/svg+xml" />
                <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
                <meta content="Krupomol" name="apple-mobile-web-app-title" />
            </head>

            <NextIntlClientProvider>
                <body className={`relative flex min-h-screen flex-col font-sans antialiased`}>
                    {children}

                    <ScrollToTop />
                </body>
            </NextIntlClientProvider>
        </html>
    );
}
