/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

import { LocaleType } from '@types';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as LocaleType)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../locales/${locale}.json`)).default,
    };
});
