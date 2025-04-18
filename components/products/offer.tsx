'use client';

import { useTranslations } from 'next-intl';

import { Title } from '@components/shared';
import { AnimatedSection } from '@components/shared/animated-section';
import { AnimatedTextBox } from '@components/shared/animated-text-box';

import { cn } from '@utils';

export const Offer = () => {
    const t = useTranslations('products');

    return (
        <AnimatedSection gradientBg={true}>
            <div className="container rounded-3xl bg-accent px-6 py-10 shadow-lg desktop:px-16 desktop:py-20">
                <AnimatedTextBox className="mb-5" from="bottom">
                    <Title
                        as="h3"
                        className={cn(
                            'font-primary text-center text-[36px] font-bold leading-[140%] desktop:text-5xl'
                        )}
                    >
                        {t('offer.title')}
                    </Title>
                </AnimatedTextBox>
                <AnimatedTextBox from="top">
                    <p className="text-base leading-5 text-black">{t('offer.text')}</p>
                </AnimatedTextBox>
            </div>
        </AnimatedSection>
    );
};
