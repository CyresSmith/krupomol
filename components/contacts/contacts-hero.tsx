import { getTranslations } from 'next-intl/server';

import { HeroSection, Title } from '@components/shared';

import image from '@assets/images/contacts-hero.jpg';

export const ContactsHero = async () => {
    const t = await getTranslations('contacts.hero');

    return (
        <HeroSection image={image}>
            <Title
                as="h1"
                className="mb-[20px] text-left text-[44px] font-bold leading-normal text-background desktop:text-6xl desktop:leading-normal"
            >
                {t('title')}
            </Title>
        </HeroSection>
    );
};
