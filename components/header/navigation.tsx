'use client';

import navAnchors from './nav-anchors.json' assert {type: 'json'};

import { useLocale, useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

// import { Link } from '@i18n';

// import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@ui/dropdown-menu';
import {
    NavigationMenu,
    // NavigationMenuItem,
    NavigationMenuList,
    // navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { NavigationAnchorsType, NavigationTitle } from '@types';

import { PRICES_ROUTE } from '@routes';

import { navigation } from '@constants';

// import { cn } from '@utils';
import { NavMenuItem } from './nav-menu-item';

interface Props {
    onItemClick?: () => void;
}

export const Navigation = ({ onItemClick }: Props) => {
    const t = useTranslations('header.navigation');
    const locale = useLocale();
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const anchors: NavigationAnchorsType = navAnchors;

    return (
        <NavigationMenu className="hidden desktop:block h-full" orientation="horizontal">
            <NavigationMenuList className="flex gap-6 h-[88px]">
                {(locale === 'uk'
                    ? navigation
                    : navigation.filter(({ href }) => !href?.includes(PRICES_ROUTE))
                ).map(({ href, title }) => {
                    const isActive = pathname === href;
                    return (
                        <NavMenuItem anchors={anchors[title as NavigationTitle]} href={href} isActive={isActive} key={title} onItemClick={onItemClick} title={t(title as NavigationTitle)} />
                        // <NavigationMenuItem className="relative" key={title}>
                        //     <Link href={href ?? '/'} onClick={onItemClick}>
                        //         <DropdownMenu>
                        //         <DropdownMenuTrigger className={cn(navigationMenuTriggerStyle())}>
                        //             {t(title as NavigationTitle)}
                        //         </DropdownMenuTrigger>
                        //         <DropdownMenuContent>
                        //             <DropdownMenuGroup>
                        //                 {anchors[title as NavigationTitle].map((anchor, i) => <DropdownMenuItem key={i}>
                        //                     {anchor}
                        //                 </DropdownMenuItem>)}
                        //             </DropdownMenuGroup>
                        //         </DropdownMenuContent>
                        //     </DropdownMenu>
                        //     </Link>
                        // </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};


{/* <Link
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
</Link> */}