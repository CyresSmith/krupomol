import { getLocale, getTranslations } from 'next-intl/server';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu';

import { Icon, LinkWithHash } from '@components/shared';

import { ContactType, IconName, NavigationTitle } from '@types';

import { CONTACTS_ROUTE, PRICES_ROUTE } from '@routes';

import { addresses, ANCHORS, mails, messengers, navigation, phones } from '@constants';

import { cn } from '@utils';

const AddressBlock = ({
    icon,
    isAddress = false,
    items,
    row = false,
}: {
    icon?: IconName;
    isAddress?: boolean;
    items: ContactType[];
    row?: boolean;
}) => {
    return (
        <div
            className={cn(
                'grid items-start gap-5 fill-primary text-primary mobile:gap-4',
                icon ? 'grid-cols-[24px,1fr]' : 'grid-cols-1'
            )}
        >
            {icon && <Icon className="size-6" name={icon} />}

            <ul className={cn('flex', row ? 'flex-row gap-4' : 'flex-col gap-2')}>
                {items.map(({ href, icon, text }) => {
                    return (
                        <li key={href}>
                            <Link
                                className="cursor-pointer px-0 transition hover:opacity-80"
                                href={href}
                                rel={isAddress ? 'noopener noreferrer nofollow' : undefined}
                                target={isAddress ? '_blank' : undefined}
                            >
                                {icon && (
                                    <Icon className={cn(text ? 'size-6' : 'size-8')} name={icon} />
                                )}{' '}
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export const Footer = async () => {
    const locale = await getLocale();
    const t = await getTranslations('header');
    const f = await getTranslations('footer');

    const addressesText = t.raw('address') as string[];

    return (
        <footer className="w-full bg-card">
            <div className="container pb-5 pt-12 desktop:pt-24">
                <div className="flex min-h-[230px] flex-col items-center gap-12 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-36">
                    <Link aria-label="link to home" className="ml-5" href={'/'}>
                        <Icon className="h-[88px] w-[189px]" name="krupomol_logo" />
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start gap-4 mobile:items-center">
                            {(locale === 'uk'
                                ? navigation
                                : navigation.filter(
                                      ({ href }) => !href.pathname?.includes(PRICES_ROUTE)
                                  )
                            ).map(({ href, title }) => (
                                <NavigationMenuItem key={title}>
                                    <Link
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            'py-0 text-primary hover:text-primary hover:opacity-80'
                                        )}
                                        href={href ?? '/'}
                                    >
                                        {t(`navigation.${title as NavigationTitle}`)}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex min-h-[230px] flex-col justify-between">
                        <address className="mb-4 flex flex-col gap-4 not-italic text-primary desktop:flex-row desktop:gap-10">
                            <div className="flex flex-1 flex-col gap-4">
                                <AddressBlock
                                    icon="map-pinned"
                                    isAddress
                                    items={addressesText.map((address, i) => {
                                        const href = addresses[i]?.href ?? '';

                                        return {
                                            href,
                                            text: address,
                                        };
                                    })}
                                />

                                <AddressBlock icon="mailbox" items={mails} />

                                <AddressBlock isAddress items={messengers} row />
                            </div>

                            <AddressBlock icon="phone-call" items={phones} />
                        </address>

                        <LinkWithHash
                            className={cn(
                                'mt-auto',
                                buttonVariants({ variant: 'outline-primary' })
                            )}
                            href={{ hash: ANCHORS.contacts.consultation, pathname: CONTACTS_ROUTE }}
                        >
                            {t('consultation')}
                        </LinkWithHash>
                    </div>
                </div>

                <p className="mt-12 w-full border-primary text-center text-xs text-foreground/50 before:mb-3 before:block before:border-b before:border-primary before:content-['']">
                    &copy; 2025 {f('rights')}
                </p>
            </div>
        </footer>
    );
};
