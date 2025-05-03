'use client';

import { useTranslations } from 'next-intl';

import { Advantages } from '@components/shared';

import { AdvantageType } from '@types';

import { ANCHORS } from '@constants';

export const MainAdvantages = () => {
    const t = useTranslations('main.advantages');

    const advantages = t.raw('advantages') as AdvantageType[];

    return <Advantages advantages={advantages} id={ANCHORS.main.advantages} title={t('title')} />;
};
