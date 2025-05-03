import { getTranslations } from 'next-intl/server';

import { CooperationType } from 'lib/types/cooperation.types';

import { CoopItem } from './coop-item';

import { Section, Title } from '@components/shared';

export const Cooperation = async () => {
    const t = await getTranslations('prices.cooperation');
    const list = t.raw('list') as CooperationType[];

    return (
        <Section id="cooperation" variant="secondary">
            <div className="container">
                <div className="rounded-20 bg-accent px-4 py-9 shadow-lg desktop:rounded-40 desktop:px-24 desktop:py-12">
                    <Title
                        as="h6"
                        className="mb-11 text-center text-3xl text-primary desktop:text-left desktop:text-5xl"
                    >
                        {t('title')}
                    </Title>
                    <ul className="mb-7 grid grid-cols-1 gap-3 desktop:mb-9 desktop:grid-cols-3">
                        {list.map(item => (
                            <CoopItem item={item} key={item.title} />
                        ))}
                    </ul>
                    <p className="text-sm text-black desktop:text-base">{t('info')}</p>
                </div>
            </div>
        </Section>
    );
};
