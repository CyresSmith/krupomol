import type { MetadataRoute } from 'next';
import { Locale } from 'next-intl';

import { ProductsService } from 'lib/services';

import { routing } from '@i18n';

import { CERTIFICATION_ROUTE, CONTACTS_ROUTE, PRICES_ROUTE, PRODUCTS_ROUTE } from '@routes';

const APP_HOST = process.env['NEXT_PUBLIC_APP_HOST'] ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
    const allProducts = ProductsService.getProductsList({ locale: 'uk' });
    const allCategories = ProductsService.getCategories('uk');
    const allTypes = ProductsService.getAllTypes('uk');

    return [
        ...allCategories.reduce((acc, category) => {
            acc.push({
                alternates: {
                    languages: routing.locales.reduce(
                        (acc, locale) => {
                            acc[locale] = `${APP_HOST}/${locale}${category.href}`;
                            return acc;
                        },
                        {} as Record<Locale, string>
                    ),
                },
                changeFrequency: 'yearly',
                lastModified: new Date(),
                priority: 1,
                url: `${APP_HOST}${category.href}`,
            });
            return acc;
        }, [] as MetadataRoute.Sitemap),
        ...allTypes.reduce((acc, type) => {
            acc.push({
                alternates: {
                    languages: routing.locales.reduce(
                        (acc, locale) => {
                            acc[locale] = `${APP_HOST}/${locale}${type.href}`;
                            return acc;
                        },
                        {} as Record<Locale, string>
                    ),
                },
                changeFrequency: 'yearly',
                lastModified: new Date(),
                priority: 1,
                url: `${APP_HOST}${type.href}`,
            });
            return acc;
        }, [] as MetadataRoute.Sitemap),
        ...allProducts.reduce((acc, product) => {
            acc.push({
                alternates: {
                    languages: routing.locales.reduce(
                        (acc, locale) => {
                            acc[locale] = `${APP_HOST}/${locale}${product.href}`;
                            return acc;
                        },
                        {} as Record<Locale, string>
                    ),
                },
                changeFrequency: 'yearly',
                lastModified: new Date(),
                priority: 1,
                url: `${APP_HOST}${product.href}`,
            });
            return acc;
        }, [] as MetadataRoute.Sitemap),
        {
            alternates: {
                languages: routing.locales.reduce(
                    (acc, locale) => {
                        acc[locale] = `${APP_HOST}/${locale}`;
                        return acc;
                    },
                    {} as Record<Locale, string>
                ),
            },
            changeFrequency: 'yearly',
            lastModified: new Date(),
            priority: 1,
            url: APP_HOST + '/uk',
        },
        {
            alternates: {
                languages: routing.locales.reduce(
                    (acc, locale) => {
                        acc[locale] = `${APP_HOST}/${locale}${PRODUCTS_ROUTE}`;
                        return acc;
                    },
                    {} as Record<Locale, string>
                ),
            },
            changeFrequency: 'yearly',
            lastModified: new Date(),
            priority: 0.9,
            url: APP_HOST + PRODUCTS_ROUTE,
        },
        {
            alternates: {
                languages: routing.locales.reduce(
                    (acc, locale) => {
                        acc[locale] = `${APP_HOST}/${locale}${CONTACTS_ROUTE}`;
                        return acc;
                    },
                    {} as Record<Locale, string>
                ),
            },
            changeFrequency: 'yearly',
            lastModified: new Date(),
            priority: 0.8,
            url: APP_HOST + CONTACTS_ROUTE,
        },
        {
            changeFrequency: 'weekly',
            lastModified: new Date(),
            priority: 0.8,
            url: APP_HOST + '/uk' + PRICES_ROUTE,
        },
        {
            alternates: {
                languages: routing.locales.reduce(
                    (acc, locale) => {
                        acc[locale] = `${APP_HOST}/${locale}${CERTIFICATION_ROUTE}`;
                        return acc;
                    },
                    {} as Record<Locale, string>
                ),
            },
            changeFrequency: 'yearly',
            lastModified: new Date(),
            priority: 0.7,
            url: APP_HOST + CERTIFICATION_ROUTE,
        },
    ];
}
