import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const MoreInfo = async () => {
    const t = await getTranslations('products.more-info');

    return (
        <section className="relative h-[564px] py-24">
            <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="100vw"
                src="/images/products_more_info_bg.jpg"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="container relative z-10">
                <div className="w-1/2 rounded-3xl border-[7px] border-solid border-accent py-14 pl-14">
                    <h3 className="font-title text-5xl font-bold text-white">{t('title')}</h3>
                </div>
            </div>
        </section>
    );
};
