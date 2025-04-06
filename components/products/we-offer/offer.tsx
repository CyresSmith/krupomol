import { getTranslations } from 'next-intl/server';

export const Offer = async () => {
    const t = await getTranslations('products.offer');

    return (
        <section className="relative py-12 desktop:py-24">
            <div className="container">
                <div className="rounded-3xl bg-accent px-6 py-10 desktop:px-16 desktop:py-20">
                    <h3 className="font-primary mb-5 text-center font-title text-[36px] font-bold leading-[140%] desktop:text-5xl">
                        {t('title')}
                    </h3>
                    <p className="text-base leading-5 text-black">{t('text')}</p>
                </div>
            </div>
            <span className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gray-color" />
        </section>
    );
};
