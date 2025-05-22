'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

import { ProductsService } from 'lib/services';

import NavItem from './nav-item';

import { NavigationMenu, NavigationMenuList } from '@ui/navigation-menu';

import { NavigationTitle, NavItemType, ProductType } from '@types';

import { PRICES_ROUTE } from '@routes';

import { navigation } from '@constants';

import { sortProductsByType } from '@utils';

export const Navigation = () => {
    const locale = useLocale();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const t = useTranslations('header');
    const pt = useTranslations('products.type');

    return (
        <NavigationMenu className="hidden h-full desktop:block" orientation="horizontal">
            <NavigationMenuList className="relative flex gap-6">
                {(locale === 'uk'
                    ? navigation
                    : navigation.filter(({ href }) => !href.pathname?.includes(PRICES_ROUTE))
                ).map(({ href, links, title }) => {
                    const isActive = pathname === href.pathname;
                    const itemLinks =
                        links && links.length > 0
                            ? links?.map(link => {
                                  const links: NavItemType[] = [];
                                  if (title === 'product' && link.title === 'products') {
                                      const categories = ProductsService.getCategories(locale);

                                      categories.forEach(({ href, image, title }) => {
                                          const products = sortProductsByType(
                                              ProductsService.getProductsList({
                                                  categorySlug: image,
                                                  locale,
                                              })
                                          );

                                          links.push({
                                              href: { pathname: href },
                                              links: Object.entries(products).map(
                                                  ([hash, items]) => ({
                                                      href: { hash, pathname: href },
                                                      links: items.map(({ href, title }) => ({
                                                          href: { pathname: href },
                                                          title,
                                                      })),
                                                      title: pt(hash as ProductType),
                                                  })
                                              ),
                                              title,
                                          });
                                      });
                                  }

                                  return {
                                      ...link,
                                      links,
                                      title: t(`navigation.${link.title as NavigationTitle}`),
                                  };
                              })
                            : [];

                    return (
                        <NavItem
                            href={href}
                            isActive={isActive}
                            key={title}
                            links={itemLinks}
                            title={t(`navigation.${title as NavigationTitle}`)}
                        />
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
