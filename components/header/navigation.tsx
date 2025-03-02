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

import { navigation } from '@constants';

import { cn } from '@utils';

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
