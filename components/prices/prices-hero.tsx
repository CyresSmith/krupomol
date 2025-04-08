import { getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

export const PricesHero = async () => {
    const t = await getTranslations('prices.hero');

    return (
        <HeroSection bgName="prices-hero">
            <Title
                as="h1"
                className="text-left text-5xl font-bold leading-normal text-background desktop:text-6xl desktop:leading-normal"
            >
                {t('title')}
            </Title>
        </HeroSection>
    );
};
