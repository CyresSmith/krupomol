import { getLocale, getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

import image from '@assets/images/export-hero.jpg';

import { cn } from '@utils';

export const ExportHero = async () => {
    const t = await getTranslations('export');
    const locale = await getLocale();

    return (
        <HeroSection image={image}>
            <Title
                as="h1"
                className={cn(
                    'mb-[20px] text-left text-[44px] font-bold leading-normal text-background desktop:text-6xl desktop:leading-normal',
                    { 'text-[40px]': locale === 'uk' }
                )}
                title={t('hero.title')}
            />
            <p className="text-sm text-white drop-shadow-lg desktop:w-1/2 desktop:text-base">
                {t('hero.desc')}
            </p>
        </HeroSection>
    );
};
