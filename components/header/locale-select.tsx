'use client';

import { useLocale } from 'next-intl';

import { routing, usePathname, useRouter } from '@i18n';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';

import { Icon } from '@components/shared';

import { IconName, LocaleType } from '@types';

const LocaleSelect = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange = (locale: LocaleType) => replace(pathname, { locale });

    return (
        <Select onValueChange={handleChange} value={locale}>
            <SelectTrigger className="w-18 gap-2 border-none px-3 py-2">
                <SelectValue placeholder={locale}>
                    <Icon name={locale as IconName} />

                    <span className="sr-only">locale switcher</span>
                </SelectValue>
            </SelectTrigger>

            <SelectContent align="start" className="min-w-16 rounded-2xl" position="popper">
                {routing.locales
                    .filter(l => l !== locale)
                    .map(l => (
                        <SelectItem
                            className="flex w-full items-center justify-center rounded-xl p-1"
                            key={l}
                            value={l}
                        >
                            <Icon name={l as IconName} />
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    );
};

export default LocaleSelect;
