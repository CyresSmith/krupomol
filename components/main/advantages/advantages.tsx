import { getTranslations } from 'next-intl/server';

import Advantage from './advantage';

import { Title } from '@components/shared';

import { AdvantageType } from '@types';

export const Advantages = async () => {
    const t = await getTranslations('main.advantages');

    const advantages = t.raw('advantages') as AdvantageType[];

    return (
        <section className="bg-secondary py-24">
            <div className="container">
                <Title className="mb-9 text-center">{t('title')}</Title>

                <ul className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
                    {advantages.map(advantage => (
                        <Advantage key={advantage.title} {...advantage} />
                    ))}
                </ul>
            </div>
        </section>
    );
};
