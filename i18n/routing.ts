import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    defaultLocale: 'uk',
    localeDetection: false,
    localePrefix: 'as-needed',
    locales: ['uk', 'en'],
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
