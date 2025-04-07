import { getTranslations } from 'next-intl/server';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/index';

import { HeroSection, Icon, Title } from '@components/shared';

import { PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

export const ProductsHero = async () => {
    const t = await getTranslations('products');

    return (
        <HeroSection bgName="products-hero">
            <Title
                as="h1"
                className="mx-auto mb-11 max-w-[753px] text-center text-5xl font-bold leading-normal text-background mobile:text-left desktop:text-6xl desktop:leading-normal"
            >
                {t('hero.title')}
            </Title>

            <div className="flex justify-center">
                <Link
                    className={cn('mobile:w-full', buttonVariants({ size: 'lg' }))}
                    href={PRODUCTS_ROUTE}
                >
                    <span className="truncate">{t('hero.link')}</span>
                    <span className="ml-5 flex size-9 min-w-9 items-center justify-center rounded-full bg-primary">
                        <Icon className="fill-background" name="arrow-right-top" />
                    </span>
                </Link>
            </div>
        </HeroSection>
    );
};
