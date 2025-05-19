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

import { NavigationTitle } from '@types';

import { CONTACTS_ROUTE, PRICES_ROUTE } from '@routes';

import { ANCHORS, contacts, navigation, socials } from '@constants';

import { cn } from '@utils';

export const Footer = async () => {
    const locale = await getLocale();
    const t = await getTranslations('header');
    const f = await getTranslations('footer');
    const navigationT = await getTranslations('header.navigation');

    return (
        <footer className="w-full bg-card">
            <div className="container pb-5 pt-12 desktop:pt-24">
                <div className="flex flex-col items-center gap-12 desktop:flex-row desktop:items-start desktop:gap-36">
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
                                        {navigationT(title as NavigationTitle)}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex min-h-[189px] flex-col justify-between desktop:w-[324px]">
                        <address className="mb-4 not-italic text-primary">
                            <ul className="flex flex-col gap-4 fill-foreground text-sm">
                                {Object.values(contacts).map(({ href, icon, text }) => {
                                    const isAddress = href === contacts.address.href;

                                    return (
                                        <li key={href}>
                                            <Link
                                                className="grid grid-cols-[theme(space.5),1fr] gap-3 self-start px-0"
                                                href={href ?? ''}
                                                rel={
                                                    isAddress
                                                        ? 'noopener noreferrer nofollow'
                                                        : undefined
                                                }
                                                target={isAddress ? '_blank' : undefined}
                                            >
                                                {icon && <Icon className="size-5" name={icon} />}

                                                {text ?? t('address')}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
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

                    <div className="flex flex-col items-center justify-center gap-5">
                        <ul className="flex gap-2">
                            {socials.map(({ href, icon }) => (
                                <li key={href}>
                                    <Link
                                        aria-label={icon}
                                        className="flex size-8 items-center justify-center overflow-hidden rounded-[8px] bg-primary fill-primary-foreground transition hover:opacity-80"
                                        href={href ?? '/'}
                                        rel="noopener noreferrer nofollow"
                                        target="_blank"
                                    >
                                        {icon && <Icon className="size-6" name={icon} />}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link className="text-xs text-primary" href={'/'}>
                            {f('policy')}
                        </Link>
                    </div>
                </div>

                <p className="mt-12 w-full border-primary text-center text-xs text-foreground/50 before:mb-3 before:block before:border-b before:border-primary before:content-['']">
                    &copy; 2025 {f('rights')}
                </p>
            </div>
        </footer>
    );
};
