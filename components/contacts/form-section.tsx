import { getTranslations } from 'next-intl/server';

import { Card, CardHeader } from '@ui/card';

import { ConsultationForm, Section, Title } from '@components/shared';

import { ANCHORS } from '@constants';

export const FormSection = async () => {
    const t = await getTranslations('contacts.form');

    return (
        <Section id={ANCHORS.consultation} variant="secondary">
            <div className="container">
                <Card className="py-14 mobile:py-9">
                    <CardHeader className="mb-10 py-0 text-center">
                        <Title
                            as="h2"
                            className="mb-3 text-3xl font-bold tablet:text-4xl desktop:text-5xl"
                        >
                            {t('title')}
                        </Title>

                        <p className="text-text-color">{t('text')}</p>
                    </CardHeader>

                    <ConsultationForm />
                </Card>
            </div>
        </Section>
    );
};
