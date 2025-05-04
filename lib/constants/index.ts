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
        consultation: 'consultation',
        map: 'map',
    },
    export: {
        advantages: 'advantages',
        certification: 'certification',
        products: 'products',
    },
    main: {
        about: 'about',
        advantages: 'advantages',
        certification: 'certification',
        consultation: 'consultation',
        products: 'products',
    },
    prices: {
        cooperation: 'cooperation',
        payment: 'payment',
        prices: 'prices',
    },
    product: {
        info: 'info',
        offer: 'offer',
        products: 'products',
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

export const contacts: Record<'address' | 'mail' | 'tel', ContactType> = {
    address: {
        href: 'https://maps.app.goo.gl/kqyXBMD7FPCsi5YE7',
        icon: 'map-pinned',
    },
    mail: {
        href: 'mailto:info@krupomol.com',
        icon: 'mailbox',
        text: 'info@krupomol.com',
    },
    tel: {
        href: 'tel:+380974757779',
        icon: 'phone-call',
        text: '+380 (97) 475 77 79',
    },
};

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
