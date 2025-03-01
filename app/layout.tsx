import type { Metadata } from 'next';

import './globals.css';

import { mainFont } from '@fonts';

export const metadata: Metadata = {
    description: 'Крупомол - магазин круп',
    title: 'Крупомол',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${mainFont.variable} flex min-h-screen flex-col antialiased`}>
                {children}
            </body>
        </html>
    );
}
