import { getTranslations } from 'next-intl/server';

import { Card, CardHeader } from '@ui/card';

import { ConsultationForm, Title } from '@components/shared';

export const FormSection = async () => {
    const t = await getTranslations('contacts.form');

    return (
        <section className="bg-secondary py-24">
            <div className="container">
                <Card className="py-14">
                    <CardHeader className="mb-10 text-center">
                        <Title as="h2" className="mb-3 text-5xl font-bold">
                            {t('title')}
                        </Title>

                        <p className="text-text-color">{t('text')}</p>
                    </CardHeader>

                    <ConsultationForm />
                </Card>
            </div>
        </section>
    );
};
