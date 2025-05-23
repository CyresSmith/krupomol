import { getLocale, getTranslations } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import ProductCard from './product-card';

import { Section, SectionCarousel, Title } from '@components/shared';

import { titleFont } from '@fonts';

import { PRODUCTS_ROUTE } from '@routes';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const OurProducts = async () => {
    const t = await getTranslations('main.about');
    const locale = await getLocale();

    const links = ProductsService.getAllTypes(locale);

    return (
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
    );
};
