import { getTranslations } from 'next-intl/server';

import { ConditionType } from 'lib/types/conditions.types';

import { PaymentItem } from './payment-item';

import { Section, Title } from '@components/shared';

export const Payment = async () => {
    const t = await getTranslations('prices.payment');
    const conditions = t.raw('conditions') as ConditionType[];

    return (
        <Section variant="secondary">
            <div className="container">
                <Title className="mb-16 text-center text-3xl desktop:text-5xl">{t('title')}</Title>
                <ul className="mb-16 flex flex-col gap-5 desktop:flex-row">
                    {conditions.map((item, i) => (
                        <PaymentItem item={item} key={i} />
                    ))}
                </ul>
                <p className="text-sm text-black desktop:max-w-[589px] desktop:text-base">
                    {t('info')}
                </p>
            </div>
        </Section>
    );
};
