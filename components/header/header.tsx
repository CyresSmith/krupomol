import { getTranslations } from 'next-intl/server';

import LocaleSelect from './locale-select';
import { MobileMenu } from './mobile-menu';
import { Navigation } from './navigation';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon } from '@components/shared';

import { ANCHORS, contacts } from '@constants';

import { cn } from '@utils';

export const Header = async () => {
    const t = await getTranslations('header');

    return (
        <header className="absolute left-0 top-0 z-10 w-full" id="top">
            <div className="mb-6 bg-primary py-2 text-xs text-primary-foreground">
                <div className="container flex items-center justify-between gap-6 mobile:justify-center">
                    <Link
                        className="transition hover:text-accent mobile:hidden"
                        href={contacts.address?.href ?? '/'}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                    >
                        {t('address')}
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            className="transition hover:text-accent"
                            href={contacts.tel?.href ?? '/'}
                        >
                            {contacts.tel?.text}
                        </Link>

                        <LocaleSelect />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex items-center justify-between gap-6 rounded-full bg-background/15 p-4 shadow-nav-inner-shadow backdrop-blur-[25px]">
                    <Link className="ml-5" href={'/'}>
                        <Icon
                            className="h-14 w-[123px] mobile:h-11 mobile:w-[97px]"
                            name="krupomol_logo"
                        />
                    </Link>

                    <Navigation />

                    <a
                        className={cn('w-56 mobile:hidden', buttonVariants({ variant: 'outline' }))}
                        href={`#${ANCHORS.consultation}`}
                    >
                        {t('consultation')}
                    </a>

                    <MobileMenu />
                </div>
            </div>
        </header>
    );
};
