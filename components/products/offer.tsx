'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import { useTranslations } from 'next-intl';

import { inView } from 'motion';

import { Section, Title } from '@components/shared';
import { AnimatedBox } from '@components/shared/animated-box';

import { cn } from '@utils';

export const Offer = () => {
    const t = useTranslations('products');
    const ref = useRef(null);

    const isInView = useInView(ref, { amount: 0.8 });

    return (
        <Section className="relative">
            <AnimatedBox>
                <div
                    className="rounded-3xl bg-accent px-6 py-10 shadow desktop:px-16 desktop:py-20"
                    ref={ref}
                >
                    <div className="mb-5 overflow-hidden">
                        <Title
                            as="h3"
                            className={cn(
                                'font-primary translate-y-[200%] text-center text-[36px] font-bold leading-[140%] transition desktop:text-5xl',
                                isInView && 'translate-y-0'
                            )}
                        >
                            {t('offer.title')}
                        </Title>
                    </div>
                    <div className="overflow-hidden">
                        <p
                            className={cn(
                                'translate-y-[-200%] text-base leading-5 text-black transition',
                                isInView && 'translate-y-0'
                            )}
                        >
                            {t('offer.text')}
                        </p>
                    </div>
                </div>
            </AnimatedBox>
            <span className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gray-color" />
        </Section>
    );
};
