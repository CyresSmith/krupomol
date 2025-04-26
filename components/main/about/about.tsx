import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { ProductsService } from 'lib/services';

import ProductCard from './product-card';

import { Card } from '@ui/card';

import { Section, SectionCarousel, Title } from '@components/shared';
import { AnimatedSection } from '@components/shared/animated-section';
import { AnimatedTextBox } from '@components/shared/animated-text-box';

import { titleFont } from '@fonts';

import { PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

export const About = async () => {
    const t = await getTranslations('main.about');
    const locale = await getLocale();

    const links = ProductsService.getAllTypes(locale);

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
                    <AnimatedTextBox
                        className="mb-4 p-0 mobile:mb-6"
                        from="bottom"
                        triggerOnce={true}
                    >
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

                    <AnimatedTextBox className="p-0" from="top" triggerOnce={true} viewAmount={0.5}>
                        <p className="w-[410px] text-text-color mobile:w-full">{t('text')}</p>
                    </AnimatedTextBox>
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

                    <ul className="mb-7">
                        <SectionCarousel
                            href={PRODUCTS_ROUTE}
                            items={links.map(item => (
                                <ProductCard key={item.title} {...item} />
                            ))}
                            linkLabel={t('link')}
                        />
                    </ul>
                </div>

                <span className="absolute inset-x-0 bottom-0 -z-10 h-[398px] bg-gray-color" />
            </Section>
        </>
    );
};
