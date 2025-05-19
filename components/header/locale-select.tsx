'use client';

import { useLocale } from 'next-intl';

import { Link, routing, usePathname } from '@i18n';

import { Icon } from '@components/shared';

const LocaleSelect = () => {
    const locale = useLocale();
    const pathname = usePathname();

    const locales = routing.locales;

    return (
        <ul className="flex gap-3">
            {locales
                .filter(l => l !== locale)
                .map(l => (
                    <li key={l}>
                        <Link aria-label={l} href={pathname} locale={l}>
                            <Icon name={l} />
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default LocaleSelect;
