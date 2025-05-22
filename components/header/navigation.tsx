'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

import { ProductsService } from 'lib/services';

import NavItem from './nav-item';

import { NavigationMenu, NavigationMenuList } from '@ui/navigation-menu';

import { NavigationTitle, NavItemType } from '@types';

import { PRICES_ROUTE } from '@routes';

import { navigation } from '@constants';

export const Navigation = () => {
    const locale = useLocale();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const t = useTranslations('header');

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
                                          const products = ProductsService.getProductsList({
                                              categorySlug: image,
                                              locale,
                                          });

                                          links.push({
                                              href: { pathname: href },
                                              links: products.map(({ href, title }) => ({
                                                  href: { pathname: href },
                                                  title,
                                              })),
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
