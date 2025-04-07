import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Info } from './info';

import { Section, Title } from '@components/shared';

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
            <div className="z-1 container relative">
                <div className="w-full rounded-3xl border-[7px] border-solid border-accent px-5 py-16 tablet:w-1/2 desktop:w-1/2 desktop:py-14 desktop:pl-14">
                    <Title
                        as="h3"
                        className="mb-7 text-4xl font-bold leading-[140%] text-white desktop:text-5xl"
                    >
                        {t('info.title')}
                    </Title>
                    <ul className="flex flex-col gap-5 font-title text-base font-bold text-white">
                        {infoList.map((item, i) => (
                            <Info item={item} key={i} />
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};
