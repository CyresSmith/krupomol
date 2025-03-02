import type { Metadata } from 'next';

import { sharedMetadata } from 'lib/shared-metadata';

import './globals.css';

import { mainFont } from '@fonts';

export function generateMetadata(): Metadata {
    // const locale = await getLocale();
    // const t = await getTranslations('head');

    const locale = 'uk';

    return {
        ...sharedMetadata,
        description: 'desc',
        // description: t('desc'),
        openGraph: {
            ...sharedMetadata.openGraph,
            description: 'desc',
            locale,
            title: 'Krupomol',
        },
        title: 'Krupomol',
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={`${mainFont.variable} flex min-h-screen flex-col antialiased`}>
                {children}
            </body>
        </html>
    );
}
