'use client';

import { MouseEvent, PropsWithChildren, useContext } from 'react';

import { LenisContext } from './smooth-scroll';

import { Link, usePathname } from '@i18n';

import { NavItemType } from '@types';

import { HOME_ROUTE } from '@routes';

interface Props extends Omit<NavItemType, 'title'>, PropsWithChildren {
    className?: string;
}

export const LinkWithHash = ({ children, className, href }: Props) => {
    const pathname = usePathname();
    const lenis = useContext(LenisContext);

    const isHomeRoute = href.pathname === HOME_ROUTE;

    const isThisPage = isHomeRoute ? pathname === HOME_ROUTE : pathname.includes(href.pathname);

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const el = document.getElementById(href.hash ?? '');

        if (el) lenis?.scrollTo(el);
    };

    return (
        <Link
            className={className}
            href={href}
            onClick={isThisPage ? handleScroll : undefined}
            scroll={false}
        >
            {children}
        </Link>
    );
};
