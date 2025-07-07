import { getTranslations } from 'next-intl/server';

import LocaleSelect from './locale-select';
import { MobileMenu } from './mobile-menu';
import { Navigation } from './navigation';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon, LinkWithHash } from '@components/shared';

import { CONTACTS_ROUTE } from '@routes';

import { addresses, ANCHORS, phones } from '@constants';

import { cn } from '@utils';

export const Header = async () => {
    const t = await getTranslations('header');
    const addressesText = t.raw('address') as string[];

    return (
        <header className="absolute left-0 top-0 z-10 w-full" id="top">
            <div className="mb-6 bg-primary py-4 text-xs text-primary-foreground desktop:py-2">
                <div className="container flex items-start justify-between gap-6 mobile:justify-center desktop:items-center">
                    <Link
                        className="transition hover:text-accent mobile:hidden"
                        href={addresses[0]?.href ?? '/'}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                    >
                        {addressesText[0]}
                    </Link>

                    <div className="flex flex-col items-center gap-4 desktop:flex-row">
                        <ul className="flex flex-col items-center gap-4 desktop:flex-row">
                            {(phones.length > 2 ? phones.slice(0, 2) : phones).map(
                                ({ href, text }) => (
                                    <li key={href}>
                                        <Link
                                            className="transition hover:text-accent"
                                            href={href ?? '/'}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>

                        <LocaleSelect />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex items-center justify-start gap-6 rounded-full bg-background/15 p-4 shadow-nav-inner-shadow backdrop-blur-[25px]">
                    <Link aria-label="link to home" className="ml-5" href={'/'}>
                        <Icon
                            className="h-14 w-[123px] mobile:h-11 mobile:w-[97px]"
                            name="krupomol_logo"
                        />
                    </Link>

                    <Navigation />

                    <div className="flex flex-1 justify-end gap-6">
                        <LinkWithHash
                            className={cn(
                                'w-60 mobile:hidden',
                                buttonVariants({ variant: 'outline' })
                            )}
                            href={{ hash: ANCHORS.contacts.consultation, pathname: CONTACTS_ROUTE }}
                        >
                            {t('consultation')}
                        </LinkWithHash>

                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
};
