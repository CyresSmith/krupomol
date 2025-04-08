import { type Metadata } from 'next';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { routing } from '@i18n';

import { LocaleType } from '@types';

import { APP_HOST } from '@constants';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getBackgroundImage = (srcSet = '') => {
    const imageSet = srcSet
        .split(', ')
        .map(str => {
            const [url, dpi] = str.split(' ');
            return `url("${url}") ${dpi}`;
        })
        .join(', ');
    return `image-set(${imageSet})`;
};

interface MetadataOptions {
    description: string;
    image?: string;
    keywords?: string[];
    locale: LocaleType;
    path: string;
    title: string;
}

export function getMetadata({
    description,
    image = '/og/default.jpg',
    keywords = [],
    locale,
    path,
    title,
}: MetadataOptions): Metadata {
    const fullUrl = `${APP_HOST}${path}`;
    const appName = 'Krupomol';

    const languages = routing.locales.reduce(
        (acc, locale) => {
            acc[locale] = `${APP_HOST}${locale === 'uk' ? '' : '/' + locale}${path}`;
            return acc;
        },
        {} as Record<string, string>
    );

    return {
        alternates: {
            canonical: fullUrl,
            languages,
        },
        applicationName: appName,
        authors: [{ name: 'Ivan Reshetnikov' }, { name: 'Andrii Kulyk' }],
        category: 'food',
        description,
        keywords: [
            'krupomol',
            'крупомол',
            'оптова та роздрібна продаж круп',
            'магазин круп',
            'пшено',
            'ячмень',
            ...keywords,
        ],
        metadataBase: new URL(APP_HOST),
        openGraph: {
            countryName: 'Ukraine',
            description,
            images: [
                {
                    alt: title,
                    height: 630,
                    url: image,
                    width: 1200,
                },
            ],
            locale,
            siteName: appName,
            title,
            type: 'website',
            url: fullUrl,
        },
        publisher: 'Ivan Reshetnikov',
        referrer: 'origin-when-cross-origin',
        robots: {
            follow: true,
            googleBot: {
                follow: true,
                index: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
                noimageindex: false,
            },
            index: true,
            nocache: false,
        },
        title,
        // title: {
        //     default: appName,
        //     template: `%s | ${title}`,
        // },
        twitter: {
            card: 'summary_large_image',
            description,
            images: [image],
            site: '@krupomol',
            title,
        },
    };
}
