import { NavItemType } from '@types';

import { CONTACTS_ROUTE, HOME_ROUTE, PRICES_ROUTE, PRODUCTS_ROUTE, CERTIFICATION_ROUTE } from '@routes';

export const navigation: NavItemType[] = [
    {
        href: HOME_ROUTE,
        // icon: 'house',
        title: 'Головна',
    },
    {
        href: PRODUCTS_ROUTE,
        // icon: 'wheat',
        title: 'Продукція',
    },
    {
        href: CONTACTS_ROUTE,
        // icon: 'phone-call',
        title: 'Контакти',
    },
    {
        href: PRICES_ROUTE,
        // icon: 'dollar-sign',
        title: 'Закупочні ціни',
    },
    {
        href: CERTIFICATION_ROUTE,
        // icon: 'dollar-sign',
        title: 'Сертифікація',
    },
];

export const socials: Omit<NavItemType, 'title'>[] = [
    {
        href: 'https://www.instagram.com/',
        icon: 'instagram',
    },
    {
        href: 'https://www.x.com/',
        // icon: 'x',
    },
    {
        href: 'https://www.facebook.com/',
        icon: 'facebook',
    },
    {
        href: 'https://www.linkedin.com/',
        icon: 'linkedin',
    },
];

export const contacts: NavItemType[] = [
    // {
    //     href: 'mailto:info@krupomol.com',
    //     icon: 'mailbox',
    //     title: 'info@krupomol.com',
    // },
    {
        href: 'tel:+380674000000',
        icon: 'phone-call',
        title: '+380(97) 475 77 79',
    },
    {
        href: 'https://maps.app.goo.gl/xyZvKWwhcYRM5KpD7',
        icon: 'map-pinned',
        title: 'Київська область, Броварський район, с. Русанів, вул. Жовтнева, буд. 39 а',
    },
];
