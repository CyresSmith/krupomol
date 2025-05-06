import { getLocale, getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

import image from '@assets/images/certification-hero.jpg';

import { cn } from '@utils';

export const CertificatesHero = async () => {
    const t = await getTranslations('certification.hero');
    const locale = await getLocale();

    return (
        <HeroSection image={image}>
            <Title
                as="h1"
                className={cn(
                    'mb-[20px] text-left text-[40px] font-bold leading-normal text-background desktop:text-6xl desktop:leading-normal',
                    {
                        'mobile:text-[40px]': locale === 'tr',
                    }
                )}
            >
                {t('title')}
            </Title>
            <p className="text-sm text-white desktop:w-1/2 desktop:text-base">{t('desc')}</p>
        </HeroSection>
    );
};
