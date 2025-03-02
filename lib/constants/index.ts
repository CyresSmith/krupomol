import { NavItemType } from '@types';

import { CONTACTS_ROUTE, HOME_ROUTE, PRICES_ROUTE, PRODUCTS_ROUTE } from '@routes';

export const navigation: NavItemType[] = [
    {
        href: HOME_ROUTE,
        icon: 'house',
        title: 'Головна',
    },
    {
        href: PRODUCTS_ROUTE,
        icon: 'wheat',
        title: 'Продукція',
    },
    {
        href: CONTACTS_ROUTE,
        icon: 'phone-call',
        title: 'Контакти',
    },
    {
        href: PRICES_ROUTE,
        icon: 'dollar-sign',
        title: 'Ціни',
    },
];

export const socials: Omit<NavItemType, 'title'>[] = [
    {
        href: 'https://www.facebook.com/',
        icon: 'facebook',
    },
    {
        href: 'https://www.linkedin.com/',
        icon: 'linkedin',
    },
    {
        href: 'https://www.instagram.com/',
        icon: 'instagram',
    },
    {
        href: 'https://www.tiktok.com/',
        icon: 'tiktok',
    },
];

export const contacts: NavItemType[] = [
    {
        href: 'mailto:info@krupomol.com',
        icon: 'mailbox',
        title: 'info@krupomol.com',
    },
    {
        href: 'tel:+380674000000',
        icon: 'phone-call',
        title: '+380 67 400 0000',
    },
    {
        href: 'https://maps.app.goo.gl/Jhj8iX7aF4wRPDUt8',
        icon: 'map-pinned',
        title: 'вулиця Лаврська, 27, Київ, 02000',
    },
];
