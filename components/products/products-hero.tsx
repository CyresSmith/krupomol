import { getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

import image from '@assets/images/products-hero.jpg';

export const ProductsHero = async () => {
    const t = await getTranslations('products');

    return (
        <HeroSection image={image}>
            <Title
                as="h1"
                className="mx-auto mb-11 max-w-[753px] text-center text-5xl font-bold leading-normal text-background mobile:text-left desktop:text-6xl desktop:leading-normal"
                title={t('hero.title')}
            />

            {/* <div className="flex justify-center">
                <Link
                    className={cn('mobile:w-full', buttonVariants({ size: 'lg' }))}
                    href={PRODUCTS_ROUTE}
                >
                    <span className="truncate">{t('hero.link')}</span>
                    <span className="ml-5 flex size-9 min-w-9 items-center justify-center rounded-full bg-primary">
                        <Icon className="fill-background" name="arrow-right-top" />
                    </span>
                </Link>
            </div> */}
        </HeroSection>
    );
};
