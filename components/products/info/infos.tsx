import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { Info } from './info';

import { IconName } from '@types';

export const Infos = async () => {
    const t = await getTranslations('products');
    const infoList = t.raw('info.infoList') as { icon: IconName; title: string }[];

    return (
        <section className="relative h-[674px] py-24 desktop:h-[564px]">
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
                    <h3 className="mb-7 font-title text-4xl font-bold leading-[140%] text-white desktop:text-5xl">
                        {t('info.title')}
                    </h3>
                    <ul className="flex flex-col gap-5 font-title text-base font-bold text-white">
                        {infoList.map((item, i) => (
                            <Info item={item} key={i} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
