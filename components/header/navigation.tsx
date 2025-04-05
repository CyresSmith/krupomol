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

import { NavigationTitle } from '@types';

import { navigation } from '@constants';

import { cn } from '@utils';

interface Props {
    onItemClick?: () => void;
}

export const Navigation = ({ onItemClick }: Props) => {
    const pathname = usePathname();
    const t = useTranslations('header.navigation');

    return (
        <NavigationMenu className="hidden desktop:block" orientation="horizontal">
            <NavigationMenuList className="flex gap-12">
                {navigation.map(({ href, title }) => (
                    <NavigationMenuItem key={title}>
                        <NavigationMenuLink
                            active={pathname === href}
                            className={cn(navigationMenuTriggerStyle())}
                            href={href}
                            onSelect={onItemClick}
                        >
                            {t(title as NavigationTitle)}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
