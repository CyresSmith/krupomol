/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type Metadata } from 'next';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ProductsService } from './services';

import { routing } from '@i18n';

import { LocaleType, ProductListItemType, ProductType } from '@types';

import { APP_NAME } from '@constants';

const APP_HOST = process.env['NEXT_PUBLIC_APP_HOST'] ?? 'http://localhost:3000';

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
    const canonical = `${APP_HOST}/${locale}${path}`;

    const products = ProductsService.getProductsList({ locale }).map(({ title }) => title);

    const languages = routing.locales.reduce(
        (acc, locale) => {
            acc[`${locale.toLowerCase()}-${locale}`] = `${APP_HOST}${'/' + locale}${path}`;
            return acc;
        },
        {} as Record<string, string>
    );

    return {
        alternates: {
            canonical,
            languages,
        },
        applicationName: APP_NAME,
        authors: [{ name: 'Ivan Reshetnikov' }, { name: 'Andrii Kulyk' }],
        category: 'food',
        description,
        keywords: ['krupomol', 'крупомол', ...products, ...keywords],
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
            siteName: APP_NAME,
            title,
            type: 'website',
            url: canonical,
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
        twitter: {
            card: 'summary_large_image',
            description,
            images: [image],
            site: '@krupomol',
            title,
        },
    };
}

export const getProductImage = (image: string) => `/images/products/${image}.png`;

const getPriority = (type: ProductType) => {
    return type === 'premium' ? 0 : type === 'regular' ? 1 : type === 'weight' ? 2 : 3;
};

export const sortPremiumFirst = (items: ProductListItemType[]) => {
    return [...items].sort((a, b) => {
        return getPriority(a.type) - getPriority(b.type);
    });
};

export const filterByProductType = (items: ProductListItemType[], type: ProductType) => {
    return [...items].filter(item => item.type === type);
};

export const sortProductsByType = (items: ProductListItemType[]) => {
    return items.reduce(
        (acc: Record<ProductType, ProductListItemType[]>, item) => {
            acc[item.type].push(item);

            return acc;
        },
        { premium: [], regular: [], weight: [] }
    );
};

export const sendEvent = (event: string, data?: Record<string, any>) => {
    // if (typeof window !== 'undefined' && (window as any).dataLayer) {
    //     (window as any).dataLayer.push({
    //         event,
    //         ...data,
    //     });
    // }

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event, data);
    }
};
