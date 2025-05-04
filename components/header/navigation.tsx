'use client';

import { useLocale } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

import { NavMenuItem } from './nav-menu-item';

import { NavigationMenu, NavigationMenuList } from '@ui/navigation-menu';

import { NavigationTitle } from '@types';

import { PRICES_ROUTE } from '@routes';

import { navigation } from '@constants';

interface Props {
    onItemClick?: () => void;
}

export const Navigation = ({ onItemClick }: Props) => {
    const locale = useLocale();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

    return (
        <NavigationMenu className="hidden h-full desktop:block" orientation="horizontal">
            <NavigationMenuList className="relative flex h-[88px] gap-6">
                {(locale === 'uk'
                    ? navigation
                    : navigation.filter(({ href }) => !href?.includes(PRICES_ROUTE))
                ).map(({ href, title }) => {
                    const isActive = pathname === href;
                    return (
                        <NavMenuItem
                            href={href}
                            isActive={isActive}
                            key={title}
                            onItemClick={onItemClick}
                            title={title as NavigationTitle}
                        />
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

{
    /* <Link
    {...(isActive ? { 'data-active': true } : {})}
    className={cn(
        navigationMenuTriggerStyle(),
        isActive &&
            'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:border-b-2 after:border-accent after:content-[""]'
    )}
    href={href ?? '/'}
    onClick={onItemClick}
>
    {t(title as NavigationTitle)}
</Link> */
}
