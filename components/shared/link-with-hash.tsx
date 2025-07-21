'use client';

import { MouseEvent, PropsWithChildren, useContext } from 'react';

import { LenisContext } from './smooth-scroll';

import { Link, usePathname } from '@i18n';

import { NavItemType } from '@types';

import { HOME_ROUTE } from '@routes';

import { sendEvent } from '@utils';

interface Props extends Omit<NavItemType, 'title'>, PropsWithChildren {
    className?: string;
    eventLocation?: string;
    eventName?: string;
}

export const LinkWithHash = ({ children, className, eventLocation, eventName, href }: Props) => {
    const pathname = usePathname();
    const lenis = useContext(LenisContext);

    const isHomeRoute = href.pathname === HOME_ROUTE;

    const isThisPage = isHomeRoute ? pathname === HOME_ROUTE : pathname.includes(href.pathname);

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const el = document.getElementById(href.hash ?? '');

        if (el) lenis?.scrollTo(el);
    };

    const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (eventName) {
            const params = eventLocation ? { location: eventLocation } : undefined;

            sendEvent(eventName, params);
        }

        if (isThisPage) handleScroll(e);
    };

    return (
        <Link className={className} href={href} onClick={handleLinkClick} scroll={false}>
            {children}
        </Link>
    );
};
