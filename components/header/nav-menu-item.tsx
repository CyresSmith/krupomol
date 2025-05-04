'use client';

import { ChevronRight } from 'lucide-react';
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
    const [prodOpen, setProdOpen] = useState<'groats' | 'sugar' | null>(null);
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
                <PopoverTrigger className="outline-none">
                    <Link
                        className={cn(
                            'relative w-full',
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
                        className="flex w-fit flex-col p-0"
                        side="bottom"
                        sideOffset={-2}
                    >
                        <ul className="w-full py-2">
                            {anchorEntries.map((anchor, i) =>
                                anchor[0] === 'products' && href === '/products' ? (
                                    <li
                                        className="w-full"
                                        key={i}
                                        onMouseEnter={() => setCatOpen(true)}
                                        onMouseLeave={() => setCatOpen(false)}
                                    >
                                        <Popover
                                            key={anchor[0]}
                                            onOpenChange={setCatOpen}
                                            open={catOpen}
                                        >
                                            <PopoverTrigger className="flex w-full items-center justify-between px-2 text-left outline-none">
                                                <Link
                                                    className={cn(
                                                        'text-md flex w-full items-center justify-between gap-3 rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background',
                                                        catOpen && 'bg-primary text-background'
                                                    )}
                                                    href={anchor[0]}
                                                >
                                                    {anchor[1]}
                                                    <ChevronRight />
                                                </Link>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                align="start"
                                                alignOffset={-8}
                                                className="w-fit p-0"
                                                side="right"
                                                sideOffset={0}
                                            >
                                                <ul className="py-2">
                                                    {productsCategories.map(c => (
                                                        <li
                                                            className="w-full"
                                                            key={c.title}
                                                            onMouseEnter={() =>
                                                                setProdOpen(
                                                                    c.image as 'groats' | 'sugar'
                                                                )
                                                            }
                                                            onMouseLeave={() => setProdOpen(null)}
                                                        >
                                                            <Popover open={prodOpen === c.image}>
                                                                <PopoverTrigger className="w-[150px] px-2 text-left outline-none">
                                                                    <Link
                                                                        className={cn(
                                                                            'text-md flex w-full items-center justify-between gap-3 rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background',
                                                                            prodOpen === c.image &&
                                                                                'bg-primary text-background'
                                                                        )}
                                                                        href={c.href}
                                                                    >
                                                                        {c.title}
                                                                        <ChevronRight />
                                                                    </Link>
                                                                </PopoverTrigger>
                                                                <PopoverContent
                                                                    align="start"
                                                                    alignOffset={-8}
                                                                    className="w-fit p-2"
                                                                    side="right"
                                                                    sideOffset={0}
                                                                >
                                                                    <ul>
                                                                        {ProductsService.getProductsList(
                                                                            {
                                                                                categorySlug:
                                                                                    c.image,
                                                                                locale,
                                                                            }
                                                                        ).map(product => (
                                                                            <li key={product.href}>
                                                                                <Link
                                                                                    className="text-md block w-full rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background"
                                                                                    href={
                                                                                        product.href
                                                                                    }
                                                                                >
                                                                                    {product.title}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </PopoverContent>
                                                            </Popover>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </PopoverContent>
                                        </Popover>
                                    </li>
                                ) : (
                                    <li className="px-2" key={i}>
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
