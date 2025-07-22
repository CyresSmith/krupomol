import { PropsWithChildren } from 'react';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import '../globals.css';

import { routing } from '@i18n';

import { LenisProvider, ScrollToTop } from '@components/shared';

import { WithLocale, WithParams } from '@types';

import { ENV_NODES } from '@constants';

import { getMetadata } from '@utils';

const GA_ID = process.env['NEXT_PUBLIC_GA_ID'];
const GTM_ID = process.env['NEXT_PUBLIC_GTM_ID'];
const NODE_ENV = process.env.NODE_ENV || ENV_NODES.development;

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const t = await getTranslations('main.metadata');

    const keywords = t.raw('keywords') as string[];

    return getMetadata({
        description: t('desc'),
        keywords,
        locale,
        path: '',
        title: t('title'),
    });
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
        <html className="relative !scroll-smooth" lang={p.locale}>
            <head>
                <link href="/favicon.ico" rel="icon" sizes="48x48" />
                <link href="/favicon.svg" rel="icon" sizes="any" type="image/svg+xml" />
                <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
                <meta content="Krupomol" name="apple-mobile-web-app-title" />
            </head>

            <NextIntlClientProvider>
                <body className={`relative flex min-h-screen flex-col font-sans antialiased`}>
                    <LenisProvider>
                        {children}

                        {/* <PageViewTracker /> */}
                        <ScrollToTop />
                    </LenisProvider>
                </body>
                {NODE_ENV === ENV_NODES.production && (
                    <>
                        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
                        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
                    </>
                )}
            </NextIntlClientProvider>
        </html>
    );
}
