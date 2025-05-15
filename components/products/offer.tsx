import { getTranslations } from 'next-intl/server';

import { AnimatedCard, AnimatedSection, AnimatedTextBox, Title } from '@components/shared';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const Offer = async () => {
    const t = await getTranslations('products');

    return (
        <AnimatedSection gradientBg={true} id={ANCHORS.product.offer}>
            <AnimatedCard>
                <AnimatedTextBox className="mb-5" from="top">
                    <Title
                        as="h3"
                        className={cn(
                            'font-primary text-center text-[32px] font-bold leading-[140%] desktop:text-5xl'
                        )}
                        title={t('offer.title')}
                    />
                </AnimatedTextBox>
                <AnimatedTextBox from="bottom">
                    <p className="text-base leading-5 text-black">{t('offer.text')}</p>
                </AnimatedTextBox>
            </AnimatedCard>
        </AnimatedSection>
    );
};
