import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { InfoContent } from './info-content';

import { Section } from '@components/shared';

import { IconName } from '@types';

export const Infos = async () => {
    const t = await getTranslations('products');
    const infoList = t.raw('info.infoList') as { icon: IconName; title: string }[];

    return (
        <Section className="relative">
            <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src="/images/products-more-info.jpg"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            <InfoContent infoList={infoList} title={t('info.title')} />
        </Section>
    );
};
