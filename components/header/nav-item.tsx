'use client';

import { ChevronRight } from 'lucide-react';
import { MouseEvent, PropsWithChildren, useContext, useState } from 'react';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

import { Link } from '@i18n';

import { navigationMenuTriggerStyle } from '@ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';

import { LenisContext } from '@components/shared';

import { NavItemType } from '@types';

import { HOME_ROUTE } from '@routes';

import { cn } from '@utils';

interface IsChildren extends Omit<NavItemType, 'title'>, PropsWithChildren {
    isActive?: boolean;
    isChildren?: boolean;
    open?: boolean;
}

const NavItemLink = ({
    children,
    href,
    isActive = false,
    isChildren,
    open = false,
}: IsChildren) => {
    const pathname = usePathname();
    const locale = useLocale();
    const lenis = useContext(LenisContext);

    const isThisPage =
        href.pathname === HOME_ROUTE ? pathname === `/${locale}` : pathname.includes(href.pathname);

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const el = document.getElementById(href.hash ?? '');

        if (el) lenis?.scrollTo(el);
    };

    return (
        <Link
            className={cn(
                'relative w-full',
                isActive &&
                    'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:border-b-2 after:border-accent after:content-[""]',
                {
                    ['bg-primary text-background']: isChildren && open,
                    [navigationMenuTriggerStyle()]: !isChildren,
                    ['text-accent']: !isChildren && open,
                    ['text-md flex w-full items-center justify-between gap-3 rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background']:
                        isChildren,
                }
            )}
            href={href}
            onClick={isThisPage ? handleScroll : undefined}
            scroll={!isThisPage}
        >
            {children}
        </Link>
    );
};

const NavItem = ({
    href,
    isActive = false,
    isChildren = false,
    links,
    title,
}: IsChildren & NavItemType) => {
    const [open, setOpen] = useState(false);

    return (
        <li
            className="flex"
            key={href.pathname + href.hash}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {links && links.length > 0 ? (
                <Popover key={title} onOpenChange={setOpen} open={open}>
                    <PopoverTrigger className="flex w-full items-center justify-between">
                        <NavItemLink
                            href={href}
                            isActive={isActive}
                            isChildren={isChildren}
                            open={open}
                        >
                            {title}
                            {isChildren && <ChevronRight />}
                        </NavItemLink>
                    </PopoverTrigger>

                    <PopoverContent
                        align={isChildren ? 'start' : 'center'}
                        alignOffset={-8}
                        className="w-fit p-0"
                        side={isChildren ? 'right' : 'bottom'}
                        sideOffset={0}
                    >
                        <ul className="p-2">
                            {links.map(item => (
                                <NavItem {...item} isChildren key={item.title} />
                            ))}
                        </ul>
                    </PopoverContent>
                </Popover>
            ) : (
                <NavItemLink href={href} isActive={isActive} isChildren={isChildren} open={open}>
                    {title}
                </NavItemLink>
            )}
        </li>
    );
};

export default NavItem;
