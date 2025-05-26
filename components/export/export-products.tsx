import { getTranslations } from 'next-intl/server';

import { ExportProductCard } from './export-product-card';

import { exportProducts } from '@data';

import { Section, Title } from '@components/shared';

import { ExportCategories, ExportProductType } from '@types';

import { ANCHORS } from '@constants';

export const ExportProducts = async () => {
    const categories = Object.keys(exportProducts) as ExportCategories[];

    const t = await getTranslations('export');

    return (
        <Section id={ANCHORS.export.products}>
            {categories.map(categoryKey => {
                const localizedCategory = t(`categories.${categoryKey}` as const);
                const products = exportProducts[categoryKey] as ExportProductType[];

                return (
                    <div
                        className="container [&:not(:first-of-type)]:pt-10 desktop:[&>*:not(:first-of-type)]:pt-16"
                        key={categoryKey}
                    >
                        <Title
                            as="h3"
                            className="mb-5 text-center text-2xl desktop:mb-9 desktop:text-4xl"
                            title={localizedCategory}
                        />
                        <div className="w-full border-b-2 border-primary"></div>
                        {products.length > 0 && (
                            <ul className="my-5 grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:my-9 desktop:grid-cols-3">
                                {products.map(product => (
                                    <ExportProductCard key={product.id} product={product} />
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </Section>
    );
};
