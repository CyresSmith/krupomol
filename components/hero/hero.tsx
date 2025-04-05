import { getTranslations } from 'next-intl/server';

import { Title } from '@components/shared';

export const Hero = async () => {
    const t = await getTranslations('main.hero');

    return (
        <section className="rounded-b-[theme(space.28)] bg-card shadow-lg">
            <div className="container relative pb-24 pt-6">
                <Title>{t('title')}</Title>
            </div>
        </section>
    );
};
