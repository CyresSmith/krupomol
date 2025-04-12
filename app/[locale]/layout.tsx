import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import '../globals.css';

import { routing } from '@i18n';

import { LenisProvider, ScrollToTop } from '@components/shared';

import { WithLocale, WithParams } from '@types';

import { getMetadata } from '@utils';

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('main.metadata');
    return getMetadata({ description: t('desc'), locale, path: '', title: t('title') });
}

export function generateStaticParams() {
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
                <LenisProvider>
                    <body className={`relative flex min-h-screen flex-col font-sans antialiased`}>
                        {children}

                        <ScrollToTop />
                    </body>
                </LenisProvider>
            </NextIntlClientProvider>
        </html>
    );
}
