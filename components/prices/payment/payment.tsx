import { getTranslations } from 'next-intl/server';

import { ConditionType } from 'lib/types/conditions.types';

import { PaymentItem } from './payment-item';

import { Link } from '@i18n';

import { buttonVariants } from '@ui/button';

import { Icon, Section, Title } from '@components/shared';

import { CONTACTS_ROUTE } from '@routes';

import { ANCHORS } from '@constants';

import { cn } from '@utils';

export const Payment = async () => {
    const t = await getTranslations('prices.payment');
    const conditions = t.raw('conditions') as ConditionType[];

    return (
        <Section id={ANCHORS.prices.payment} variant="secondary">
            <div className="container">
                <Title as="h6" className="mb-16 text-center text-3xl desktop:text-5xl">
                    {t('title')}
                </Title>
                <ul className="mb-16 flex flex-col gap-5 desktop:flex-row">
                    {conditions.map((item, i) => (
                        <PaymentItem item={item} key={i} />
                    ))}
                </ul>

                <div className="flex flex-col items-center gap-8">
                    <p className="text-center text-sm text-black desktop:max-w-[589px] desktop:text-base">
                        {t('info')}
                    </p>

                    <Link
                        className={cn(
                            'w-full tablet:w-fit desktop:w-fit',
                            buttonVariants({ variant: 'outline-primary' })
                        )}
                        href={{ pathname: CONTACTS_ROUTE }}
                    >
                        {t('contacts')}

                        <Icon className="ml-8 fill-primary" name="arrow-right-top" />
                    </Link>
                </div>
            </div>
        </Section>
    );
};
