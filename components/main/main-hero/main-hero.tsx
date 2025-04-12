'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { HeroSection, Icon, Title } from '@components/shared';

import { PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

export const MainHero = () => {
    const t = useTranslations('main.hero');

    return (
        <HeroSection image="main-hero">
            <Title
                as="h1"
                className="mb-11 text-left text-5xl font-bold leading-normal text-background desktop:w-[753px] desktop:text-6xl desktop:leading-normal"
            >
                {t('title')}
            </Title>

            <Link
                className={cn('mobile:w-full', buttonVariants({ size: 'lg' }))}
                href={PRODUCTS_ROUTE}
            >
                <span className="truncate">{t('link')}</span>
                <span className="ml-5 flex size-9 min-w-9 items-center justify-center rounded-full bg-primary">
                    <Icon className="fill-background" name="arrow-right-top" />
                </span>
            </Link>
        </HeroSection>
    );
};
