import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    defaultLocale: 'uk',
    localeDetection: false,
    localePrefix: 'always',
    locales: ['uk', 'en', 'de', 'tr'],
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
