import { getTranslations } from 'next-intl/server';

import { Section, Title } from '@components/shared';
import { AnimatedBox } from '@components/shared/animated-box';

export const Offer = async () => {
    const t = await getTranslations('products');

    return (
        <Section className="relative">
            <AnimatedBox>
                <div className="rounded-3xl bg-accent px-6 py-10 shadow desktop:px-16 desktop:py-20">
                    <Title
                        as="h3"
                        className="font-primary mb-5 text-center text-[36px] font-bold leading-[140%] desktop:text-5xl"
                    >
                        {t('offer.title')}
                    </Title>
                    <p className="text-base leading-5 text-black">{t('offer.text')}</p>
                </div>
            </AnimatedBox>
            <span className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gray-color" />
        </Section>
    );
};
