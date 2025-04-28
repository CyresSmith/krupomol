'use client';

import { useTranslations } from 'next-intl';

import { Advantages } from '@components/shared';

import { AdvantageType } from '@types';

export const MainAdvantages = () => {
    const t = useTranslations('main.advantages');

    const advantages = t.raw('advantages') as AdvantageType[];

    return <Advantages advantages={advantages} title={t('title')} />;
};
