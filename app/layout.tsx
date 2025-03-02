import type { Metadata } from 'next';

import { sharedMetadata } from 'lib/shared-metadata';

import './globals.css';

import { mainFont } from '@fonts';

// export const metadata: Metadata = {
//     description: 'Крупомол - магазин круп',
//     title: 'Крупомол',
// };

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
            <head>
                <link href="/favicon.ico" rel="icon" sizes="48x48" />
                <link href="/favicon.svg" rel="icon" sizes="any" type="image/svg+xml" />
                <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
                <meta content="Krupomol" name="apple-mobile-web-app-title" />
            </head>
            <body className={`${mainFont.variable} flex min-h-screen flex-col antialiased`}>
                {children}
            </body>
        </html>
    );
}
