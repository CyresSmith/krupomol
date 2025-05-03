'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

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
    const [open, setOpen] = useState(true);
    const t = useTranslations('header.navigation');
    const anchors = useTranslations(`header.navigation.anchors`);

    const anchorEntries: [string, string][] = Object.entries(
        anchors.raw(title as keyof typeof anchors.raw) ?? {}
    );

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
                        align="start"
                        className="flex w-fit flex-col gap-1 p-2"
                        side="bottom"
                    >
                        <ul>
                            {anchorEntries.map((anchor, i) => (
                                <li key={i}>
                                    <Link
                                        className="text-md block rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background"
                                        href={`${href}#${anchor[0]}`}
                                    >
                                        {anchor[1]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </PopoverContent>
                )}
            </Popover>
        </NavigationMenuItem>
    );
};
