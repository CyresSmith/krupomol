'use client';

import { useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Link } from '@i18n';

import {
    NavigationMenu,
    NavigationMenuItem,
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
    const t = useTranslations('header.navigation');
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

    return (
        <NavigationMenu className="hidden desktop:block" orientation="horizontal">
            <NavigationMenuList className="flex gap-12">
                {navigation.map(({ href, title }) => {
                    const isActive = pathname === href;
                    return (
                        <NavigationMenuItem className="relative" key={title}>
                            <Link
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
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
