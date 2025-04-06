import { getTranslations } from 'next-intl/server';

export const WeOffer = async () => {
    const t = await getTranslations('products.we-offer');

    return (
        <section className="py-24">
            <div className="container">
                <div className="rounded-3xl bg-accent px-16 py-20">
                    <h3 className="font-primary mb-5 text-center font-title text-5xl font-bold">
                        {t('title')}
                    </h3>
                    <p className="text-base text-black">{t('text')}</p>
                </div>
            </div>
        </section>
    );
};
