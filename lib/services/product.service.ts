import { Locale } from 'next-intl';

import { products } from '@data';

import { ProductListItemType, ProductsData, ProductType } from '@types';

import { PRODUCTS_ROUTE } from '@routes';

import { filterByProductType, getProductImage, sortPremiumFirst } from '@utils';

const productsData = products as unknown as ProductsData;

export const ProductsService = {
    generateParams(type: 'category' | 'product' | 'type') {
        if (type === 'category') {
            return Object.keys(productsData.items).map(category => ({ category }));
        }

        if (type === 'type') {
            return Object.entries(productsData.items).reduce(
                (acc: { category: string; type: string }[], [category, value]) => {
                    Object.keys(value.items).forEach(type => {
                        acc.push({ category, type });
                    });

                    return acc;
                },
                []
            );
        }

        return Object.entries(productsData.items).reduce(
            (acc: { category: string; product: string; type: string }[], [category, value]) => {
                Object.entries(value.items).forEach(([type, value]) => {
                    Object.keys(value.items).forEach(product => {
                        acc.push({ category, product, type });
                    });
                });

                return acc;
            },
            []
        );
    },

    getAllTypes(locale: Locale) {
        return Object.entries(productsData.items).reduce(
            (acc: { href: string; image: string; title: string }[], [category, value]) => {
                Object.entries(value.items).forEach(([slug, { title }]) => {
                    acc.push({
                        href: `${PRODUCTS_ROUTE}/${category}/${slug}`,
                        image: slug,
                        title: title[locale],
                    });
                });

                return acc;
            },
            []
        );
    },

    getBreadcrumb({
        category,
        locale,
        product,
        type,
    }: {
        category?: string;
        locale: Locale;
        product?: string;
        type?: string;
    }) {
        const breadcrumb: { href?: string; title: string }[] = [
            { href: category ? PRODUCTS_ROUTE : undefined, title: productsData.title[locale] },
        ];

        if (category) {
            const categoryData = productsData.items[category];

            if (categoryData) {
                breadcrumb.push({
                    href: type ? `${PRODUCTS_ROUTE}/${category}` : undefined,
                    title: categoryData.title[locale],
                });

                if (type) {
                    const typeData = categoryData?.items[type];

                    if (typeData) {
                        breadcrumb.push({
                            href: product ? `${PRODUCTS_ROUTE}/${category}/${type}` : undefined,
                            title: typeData.title[locale],
                        });

                        if (product) {
                            const productData = categoryData?.items[type]?.items[product];

                            if (productData) {
                                breadcrumb.push({
                                    title: productData.title[locale],
                                });
                            }
                        }
                    }
                }
            }
        }

        return breadcrumb;
    },

    getCategories(locale: Locale) {
        return Object.entries(productsData.items).map(([slug, { title }]) => ({
            href: `${PRODUCTS_ROUTE}/${slug}`,
            image: slug,
            title: title[locale],
        }));
    },

    getCategoryName({
        categorySlug,
        locale,
        typeSlug,
    }: {
        categorySlug: string;
        locale: Locale;
        typeSlug?: string;
    }) {
        const category = typeSlug
            ? productsData.items[categorySlug]?.items[typeSlug]
            : productsData.items[categorySlug];

        return category?.title[locale] ?? '';
    },

    getProduct(categorySlug: string, typeSlug: string, productSlug: string, locale: Locale) {
        const product =
            productsData.items[categorySlug]?.items[typeSlug]?.items[productSlug] ?? null;

        if (!product) return null;

        return {
            ...product,
            image: getProductImage(product.image),
            title: product.title[locale],
        };
    },

    getProductsList({
        categorySlug,
        locale = 'uk',
        type,
        typeSlug,
    }: {
        categorySlug?: string;
        locale: Locale;
        type?: ProductType;
        typeSlug?: string;
    }) {
        let products: ProductListItemType[] = [];

        if (categorySlug) {
            if (typeSlug) {
                const typeItems = productsData.items[categorySlug]?.items[typeSlug];

                if (typeItems) {
                    products = Object.entries(typeItems.items).map(([slug, product]) => ({
                        ...product,
                        href: `${PRODUCTS_ROUTE}/${categorySlug}/${typeSlug}/${slug}`,
                        image: getProductImage(product.image),
                        title: product.title[locale],
                    }));
                }
            } else {
                const category = productsData.items[categorySlug];

                if (category) {
                    Object.entries(category.items).forEach(([typeSlug, type]) => {
                        Object.entries(type.items).forEach(([slug, product]) => {
                            products.push({
                                ...product,
                                href: `${PRODUCTS_ROUTE}/${categorySlug}/${typeSlug}/${slug}`,
                                image: getProductImage(product.image),
                                title: product.title[locale],
                            });
                        });
                    });
                }
            }
        } else {
            Object.entries(productsData.items).forEach(([categorySlug, category]) => {
                Object.entries(category.items).forEach(([typeSlug, type]) => {
                    Object.entries(type.items).forEach(([slug, product]) => {
                        products.push({
                            ...product,
                            href: `${PRODUCTS_ROUTE}/${categorySlug}/${typeSlug}/${slug}`,
                            image: getProductImage(product.image),
                            title: product.title[locale],
                        });
                    });
                });
            });
        }

        if (type) {
            products = filterByProductType(products, type);
        }

        return sortPremiumFirst(products);
    },

    getTypesByCategory(categorySlug: string, locale: Locale) {
        const category = productsData.items[categorySlug];

        if (!category) return [];

        return Object.entries(category.items).map(([slug, { title }]) => ({
            href: `${PRODUCTS_ROUTE}/${categorySlug}/${slug}`,
            title: title[locale],
        }));
    },
};
