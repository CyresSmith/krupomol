import { getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

import image from '@assets/images/prices-hero.jpg';

export const PricesHero = async () => {
    const t = await getTranslations('prices.hero');

    return (
        <HeroSection image={image}>
            <Title
                as="h1"
                className="text-left text-5xl font-bold leading-normal text-background desktop:text-6xl desktop:leading-normal"
            >
                {t('title')}
            </Title>
        </HeroSection>
    );
};
