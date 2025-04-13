'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import ProductCard from './product-card';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';
import { Card } from '@ui/card';

import { Icon, Section, Title } from '@components/shared';
import { AnimatedSection } from '@components/shared/animated-section';
import { AnimatedTextBox } from '@components/shared/animated-text-box';

import { titleFont } from '@fonts';

import { PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

export const About = () => {
    const t = useTranslations('main.about');
    const products = t.raw('products') as { image: string; title: string }[];

    return (
        <>
            <AnimatedSection className="!pb-0">
                <Card className="container relative min-h-[343px] p-16 shadow-lg mobile:px-4 mobile:pb-16 mobile:pt-64">
                    <div className="absolute right-0 top-1/2 h-[377px] w-[662px] -translate-y-1/2 overflow-hidden mobile:inset-x-0 mobile:top-10 mobile:h-[194px] mobile:w-full mobile:translate-y-0 tablet:w-[280px]">
                        <Image
                            alt=""
                            className="object-cover tablet:object-contain"
                            fill
                            priority
                            sizes="100%"
                            src="/images/main-about-as.png"
                        />
                    </div>
                    {/* <CardHeader className="mb-4 p-0 mobile:mb-6"> */}
                    <AnimatedTextBox className="mb-4 p-0 mobile:mb-6" from="bottom">
                        <Title
                            as="h2"
                            className={cn(
                                'w-[410px] text-5xl font-bold mobile:w-full mobile:text-center',
                                titleFont.className
                            )}
                        >
                            {t('title')}
                        </Title>
                    </AnimatedTextBox>
                    {/* </CardHeader> */}

                    {/* <CardContent className="p-0"> */}
                    <AnimatedTextBox className="p-0" from="top" viewAmount={0.5}>
                        <p className="w-[410px] text-text-color mobile:w-full">{t('text')}</p>
                    </AnimatedTextBox>
                    {/* </CardContent> */}
                </Card>
            </AnimatedSection>
            <Section className="relative z-0">
                <div className="container">
                    <Title
                        as="h3"
                        className={cn(
                            'mb-6 text-center text-4xl desktop:mb-14 desktop:text-5xl',
                            titleFont.className
                        )}
                    >
                        {t('our-products')}
                    </Title>

                    <ul className="mb-7 grid grid-cols-1 grid-rows-[repeat(4,428px)] gap-4 tablet:grid-cols-2 tablet:grid-rows-[repeat(2,428px)] desktop:grid-cols-4 desktop:grid-rows-[360px]">
                        {products.map(item => (
                            <ProductCard key={item.title} {...item} />
                        ))}
                    </ul>

                    <div className="flex items-center justify-end">
                        <Link
                            className={cn(
                                'z-50 mobile:w-full',
                                buttonVariants({ size: 'lg', variant: 'primary' })
                            )}
                            href={PRODUCTS_ROUTE}
                        >
                            {t('link')}

                            <Icon className="ml-8" name="arrow-right-top" />
                        </Link>
                    </div>
                </div>

                <span className="absolute inset-x-0 bottom-0 -z-10 h-[398px] bg-gray-color" />
            </Section>
        </>
    );
};
