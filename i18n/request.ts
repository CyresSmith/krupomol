/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

import { LocaleType } from '@types';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as LocaleType)) {
        locale = routing.defaultLocale;
    }

    return {
        locale: locale as LocaleType,
        messages: (await import(`../locales/${locale}.json`)).default,
    };
});
