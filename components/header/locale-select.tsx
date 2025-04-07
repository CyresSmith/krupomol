'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@i18n';

import { Icon } from '@components/shared';

const LocaleSelect = () => {
    const locale = useLocale();
    const pathname = usePathname();

    const nextLocale = locale === 'en' ? 'uk' : 'en';

    return (
        <Link href={pathname} locale={nextLocale}>
            <Icon name={nextLocale} />
        </Link>
    );
};

export default LocaleSelect;
