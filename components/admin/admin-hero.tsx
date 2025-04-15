import { HeroSection, Title } from '@components/shared';

import image from '@assets/images/contacts-hero.jpg';

export const AdminHero = () => {
    return (
        <HeroSection image={image}>
            <Title className="text-background mobile:text-4xl">Сторінка адміністрування</Title>
        </HeroSection>
    );
};
