import { getTranslations } from 'next-intl/server';

import { Advantages } from '@components/shared';

import { AdvantageType } from '@types';

export const ExportAdvantages = async () => {
    const t = await getTranslations('export');

    const advantages = t.raw('advantages') as AdvantageType[];

    return <Advantages advantages={advantages} title={t('title')} />;
};
