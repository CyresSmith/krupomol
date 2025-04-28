'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname, routing } from '@i18n';

import { Icon } from '@components/shared';

import { cn } from '@utils';

const LocaleSelect = () => {
    const locale = useLocale();
    const pathname = usePathname();

    const locales = routing.locales;

    return (
        <ul className="flex">
            {locales.map((l, i) => (
                <li
                    className={cn(
                        'border-[1px] border-transparent px-1 transition',
                        locale === l && 'rounded-[4px] border-background'
                    )}
                    key={i}
                >
                    <Link href={pathname} locale={l}>
                        <Icon name={l} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LocaleSelect;
