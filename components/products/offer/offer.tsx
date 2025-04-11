import { getTranslations } from 'next-intl/server';

import { OfferContent } from './offer-content';

import { Section } from '@components/shared';

export const Offer = async () => {
    const t = await getTranslations('products');

    return (
        <Section className="relative">
            <OfferContent text={t('offer.text')} title={t('offer.title')} />
            <span className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gray-color" />
        </Section>
    );
};
