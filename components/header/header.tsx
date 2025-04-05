import { getTranslations } from 'next-intl/server';

import { Navigation } from './navigation';

import { Link } from '@i18n';

import { Button } from '@ui/button';

import { Icon } from '@components/shared';

import { contacts } from '@constants';

export const Header = async () => {
    const t = await getTranslations('header');

    return (
        <header className="absolute left-0 top-0 z-10 w-full" id="top">
            <div className="mb-6 bg-primary py-2 text-xs text-primary-foreground">
                <div className="container flex items-center justify-between gap-6">
                    <Link
                        className="transition hover:text-accent"
                        href={contacts['address']?.href ?? '/'}
                    >
                        {t('address')}
                    </Link>

                    <Link
                        className="transition hover:text-accent"
                        href={contacts['tel']?.href ?? '/'}
                    >
                        {contacts['tel']?.text}
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="shadow-nav-inner-shadow flex items-center justify-between gap-6 rounded-full bg-background/15 p-4 backdrop-blur-[25px]">
                    <Link className="ml-5" href={'/'}>
                        <Icon className="h-14 w-[123px]" name="krupomol_logo" />
                    </Link>

                    <Navigation />

                    <Button className="w-56" variant={'outline'}>
                        {t('consultation')}
                    </Button>
                </div>
            </div>
        </header>
    );
};
