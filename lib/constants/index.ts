/* eslint-disable perfectionist/sort-objects */
import { ContactType, IconName, NavItemType } from '@types';

import {
    CERTIFICATION_ROUTE,
    CONTACTS_ROUTE,
    EXPORT_ROUTE,
    HOME_ROUTE,
    PRICES_ROUTE,
    PRODUCTS_ROUTE,
} from '@routes';

export const ANCHORS = {
    certification: {
        certificates: 'certificates',
        guarantees: 'guarantees',
    },
    contacts: {
        ourContacts: 'our-contacts',
        consultation: 'consultation',
        map: 'map',
    },
    export: {
        products: 'products',
        certification: 'certification',
        advantages: 'advantages',
    },
    main: {
        about: 'about',
        products: 'products',
        certification: 'certification',
        advantages: 'advantages',
        // consultation: 'consultation',
    },
    prices: {
        prices: 'prices',
        cooperation: 'cooperation',
        payment: 'payment',
    },
    product: {
        products: 'products',
        offer: 'offer',
        info: 'info',
    },
};

export const navigation: NavItemType[] = [
    {
        href: { pathname: HOME_ROUTE },
        links: Object.values(ANCHORS.main).map(hash => ({
            href: { hash, pathname: HOME_ROUTE },
            title: hash,
        })),
        title: 'main',
    },
    {
        href: { pathname: PRODUCTS_ROUTE },
        links: Object.values(ANCHORS.product).map(hash => ({
            href: { hash, pathname: PRODUCTS_ROUTE },
            title: hash,
        })),
        title: 'product',
    },
    {
        href: { pathname: CERTIFICATION_ROUTE },
        links: Object.values(ANCHORS.certification).map(hash => ({
            href: { hash, pathname: CERTIFICATION_ROUTE },
            title: hash,
        })),
        title: 'certification',
    },
    {
        href: { pathname: EXPORT_ROUTE },
        links: Object.values(ANCHORS.export).map(hash => ({
            href: { hash, pathname: EXPORT_ROUTE },
            title: hash,
        })),
        title: 'export',
    },
    {
        href: { pathname: CONTACTS_ROUTE },
        links: Object.values(ANCHORS.contacts).map(hash => ({
            href: { hash, pathname: CONTACTS_ROUTE },
            title: hash,
        })),
        title: 'contacts',
    },
    {
        href: { pathname: PRICES_ROUTE },
        links: Object.values(ANCHORS.prices).map(hash => ({
            href: { hash, pathname: PRICES_ROUTE },
            title: hash,
        })),
        title: 'prices',
    },
];

export const socials: { href: string; icon: IconName }[] = [
    {
        href: 'https://www.x.com/',
        icon: 'x',
    },
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
    // {
    //     href: 'https://www.tiktok.com/',
    //     icon: 'tiktok',
    // },
];

export const APP_NAME = 'Krupomol';

export const addresses: ContactType[] = [
    {
        href: 'https://maps.app.goo.gl/kqyXBMD7FPCsi5YE7',
        text: '0',
    },
];

export const mails: ContactType[] = [
    {
        href: 'mailto:uaaitransgroup2023@gmail.com',
        text: 'uaaitransgroup2023@gmail.com',
    },
];

export const phones: ContactType[] = [
    {
        href: 'tel:+380974757779',
        text: '+380 (97) 475 77 79',
    },
    {
        href: 'tel:+380972159166',
        text: '+380 (97) 215 91 66',
    },
    {
        href: 'tel:+380970764224',
        text: '+380 (97) 076 42 24',
    },
];

export const SCHEMAS_MESSAGES = {
    cyrillic: 'Має бути кирилицею',
    email: 'Невірний формат email',
    latin: 'Має бути латиницею',
    max: 'Максимальне значення',
    maxLength: 'Максимальна довжина',
    min: 'Мінімальне значення',
    minLength: 'Мінімальна довжина',
    pattern: 'Невірний формат',
    phone: 'Невірний формат телефону',
    required: 'Обов’язкове поле',
    sameAs: 'Повинно бути однаковим з',
};
