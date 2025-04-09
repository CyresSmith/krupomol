import { getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

export const CertificatesHero = async () => {
    const t = await getTranslations('certification.hero');

    return (
        <HeroSection bgName="certification-hero">
            <Title
                as="h1"
                className="mb-[20px] text-left text-[44px] font-bold leading-normal text-background desktop:text-6xl desktop:leading-normal"
            >
                {t('title')}
            </Title>
            <p className="text-sm text-white desktop:w-1/2 desktop:text-base">{t('desc')}</p>
        </HeroSection>
    );
};
