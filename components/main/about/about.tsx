import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { ProductsService } from 'lib/services';

import ProductCard from './product-card';

import {
    AnimatedCard,
    AnimatedSection,
    AnimatedTextBox,
    Section,
    SectionCarousel,
    Title,
} from '@components/shared';

import { titleFont } from '@fonts';

import { PRODUCTS_ROUTE } from '@routes';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const About = async () => {
    const t = await getTranslations('main.about');
    const locale = await getLocale();

    const links = ProductsService.getAllTypes(locale);

    return (
        <>
            <AnimatedSection id={ANCHORS.main.about}>
                <AnimatedCard className="mobile:pt-64">
                    <div className="absolute right-0 top-1/2 h-[377px] w-[662px] -translate-y-1/2 overflow-hidden mobile:inset-x-0 mobile:top-10 mobile:h-[194px] mobile:w-full mobile:translate-y-0 tablet:w-[280px]">
                        <Image
                            alt=""
                            className="object-cover tablet:object-contain"
                            fill
                            sizes="(max-width: 1279px) 200px, (min-width: 1280px) 380px,"
                            src="/images/main-about-as.png"
                        />
                    </div>

                    <AnimatedTextBox from="top">
                        <Title
                            as="h2"
                            className={cn(
                                'mobile:mb-6" mb-4 w-[410px] text-[36px] font-bold mobile:w-full mobile:text-center desktop:text-[44px]',
                                titleFont.className
                            )}
                            title={t('title')}
                        />
                    </AnimatedTextBox>

                    <p className="w-[410px] text-text-color mobile:w-full">{t('text')}</p>
                </AnimatedCard>
            </AnimatedSection>

            <Section className="relative z-0" id={ANCHORS.main.products}>
                <div className="container">
                    <Title
                        as="h3"
                        className={cn(
                            'mb-6 text-center text-4xl desktop:mb-14 desktop:text-5xl',
                            titleFont.className
                        )}
                        title={t('our-products')}
                    />

                    <div className="mb-7">
                        <SectionCarousel
                            href={PRODUCTS_ROUTE}
                            items={links.map(item => (
                                <ProductCard key={item.title} {...item} />
                            ))}
                            linkLabel={t('link')}
                        />
                    </div>
                </div>

                <span className="absolute inset-x-0 bottom-0 -z-10 h-[398px] bg-gray-color" />
            </Section>
        </>
    );
};
