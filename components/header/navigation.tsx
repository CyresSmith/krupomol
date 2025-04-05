'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { navigation } from '@constants';

import { cn } from '@utils';

export const Navigation = () => {
    const pathname = usePathname();
    const t = useTranslations('header.navigation');

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-12">
                {navigation.map(({ href, title }) => (
                    <NavigationMenuItem key={title}>
                        <NavigationMenuLink
                            active={pathname === href}
                            className={cn(navigationMenuTriggerStyle())}
                            href={href}
                        >
                            {t(title)}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
