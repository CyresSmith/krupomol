'use client';

import { useTranslations } from 'next-intl';

import { ConsultationForm, Section, Title } from '@components/shared';

import { ANCHORS } from '@constants';

export const Consultation = () => {
    const t = useTranslations('main.consultation');

    return (
        <Section id={ANCHORS.main.consultation}>
            <div className="container">
                <Title
                    className="mb-12 text-center text-text-color mobile:text-3xl"
                    title={t('title')}
                />

                <ConsultationForm />
            </div>
        </Section>
    );
};
