import { getTranslations } from 'next-intl/server';

import { ConsultationForm, Section, Title } from '@components/shared';

import { ANCHORS } from '@constants';

export const Consultation = async () => {
    const t = await getTranslations('main.consultation');

    return (
        <Section id={ANCHORS.consultation}>
            <div className="container">
                <Title className="mb-12 text-center text-text-color mobile:text-3xl">
                    {t('title')}
                </Title>

                <ConsultationForm />
            </div>
        </Section>
    );
};
