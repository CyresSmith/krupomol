'use client';

import { usePathname } from 'next/navigation';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { Icon } from '@components/shared';

import { MenuItemType } from '@types';

import { CONTACTS_ROUTE, HOME_ROUTE, PRICES_ROUTE, PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

const navigation: MenuItemType[] = [
    {
        href: HOME_ROUTE,
        icon: 'house',
        title: 'Головна',
    },
    {
        href: PRODUCTS_ROUTE,
        icon: 'wheat',
        title: 'Продукція',
    },
    {
        href: CONTACTS_ROUTE,
        icon: 'phone-call',
        title: 'Контакти',
    },
    {
        href: PRICES_ROUTE,
        icon: 'dollar-sign',
        title: 'Ціни',
    },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-16">
                {navigation.map(({ href, icon, title }) => (
                    <NavigationMenuItem key={title}>
                        <NavigationMenuLink
                            active={pathname === href}
                            className={cn(navigationMenuTriggerStyle())}
                            href={href}
                        >
                            {icon && <Icon name={icon} />}
                            {title}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
