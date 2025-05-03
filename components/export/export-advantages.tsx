import { getTranslations } from 'next-intl/server';

import { Advantages } from '@components/shared';

import { AdvantageType } from '@types';

import { ANCHORS } from '@constants';

export const ExportAdvantages = async () => {
    const t = await getTranslations('export');

    const advantages = t.raw('advantages') as AdvantageType[];

    return <Advantages advantages={advantages} id={ANCHORS.export.advantages} title={t('title')} />;
};
