import { ContactType, NavItemType } from '@types';

import {
    CERTIFICATION_ROUTE,
    CONTACTS_ROUTE,
    EXPORT_ROUTE,
    HOME_ROUTE,
    PRICES_ROUTE,
    PRODUCTS_ROUTE,
} from '@routes';

export const navigation: NavItemType[] = [
    {
        href: HOME_ROUTE,
        title: 'main',
    },
    {
        href: PRODUCTS_ROUTE,
        title: 'product',
    },
    {
        href: CERTIFICATION_ROUTE,
        title: 'certification',
    },
    {
        href: EXPORT_ROUTE,
        title: 'export',
    },
    {
        href: CONTACTS_ROUTE,
        title: 'contacts',
    },
    {
        href: PRICES_ROUTE,
        title: 'prices',
    },
];

export const socials: Omit<NavItemType, 'title'>[] = [
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
