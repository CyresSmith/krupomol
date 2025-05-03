'use client';

import { useState } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import { ProductsService } from 'lib/services';

import { Link } from '@i18n';

import { NavigationMenuItem, navigationMenuTriggerStyle } from '@ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';

import { NavigationTitle } from '@types';

import { cn } from '@utils';

interface Props {
    href?: string;
    isActive: boolean;
    onItemClick?: () => void;
    title: string;
}

export const NavMenuItem = ({ href, isActive, onItemClick, title }: Props) => {
    const locale = useLocale();
    const [open, setOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const [prodOpen, setProdOpen] = useState(false);
    const t = useTranslations('header.navigation');
    const anchors = useTranslations(`header.anchors`);

    const anchorEntries: [string, string][] = Object.entries(
        anchors.raw(title as keyof typeof anchors.raw) ?? {}
    );

    const productsCategories = ProductsService.getCategories(locale);

    return (
        <NavigationMenuItem
            className="flex h-full items-center"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Popover onOpenChange={setOpen} open={open}>
                <PopoverTrigger>
                    <Link
                        className={cn(
                            'relative',
                            navigationMenuTriggerStyle(),
                            isActive &&
                                'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:border-b-2 after:border-accent after:content-[""]',
                            open && 'text-accent'
                        )}
                        href={href ?? '/'}
                        onClick={onItemClick}
                    >
                        {t(title as NavigationTitle)}
                    </Link>
                </PopoverTrigger>

                {anchorEntries.length > 0 && (
                    <PopoverContent
                        align="center"
                        className="flex w-fit flex-col gap-1 p-2"
                        side="bottom"
                        sideOffset={-2}
                    >
                        <ul>
                            {anchorEntries.map((anchor, i) =>
                                anchor[0] === 'products' && href === '/products' ? (
                                    <li
                                        key={i}
                                        onMouseEnter={() => setCatOpen(true)}
                                        onMouseLeave={() => setCatOpen(false)}
                                    >
                                        <Popover
                                            key={anchor[0]}
                                            onOpenChange={setCatOpen}
                                            open={catOpen}
                                        >
                                            <PopoverTrigger>
                                                <Link
                                                    className="text-md block rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background"
                                                    href={anchor[0]}
                                                >
                                                    {anchor[1]}
                                                </Link>
                                            </PopoverTrigger>
                                            <PopoverContent side="right">
                                                <ul>
                                                    {productsCategories.map(c => (
                                                        <li key={c.title}>
                                                            <Link
                                                                className="text-md block rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background"
                                                                href={c.href}
                                                            >
                                                                {c.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </PopoverContent>
                                        </Popover>
                                    </li>
                                ) : (
                                    <li key={i}>
                                        <Link
                                            className="text-md block rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background"
                                            href={`${href}#${anchor[0]}`}
                                        >
                                            {anchor[1]}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </PopoverContent>
                )}
            </Popover>
        </NavigationMenuItem>
    );
};
