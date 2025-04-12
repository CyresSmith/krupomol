import { getTranslations } from 'next-intl/server';

import { Section, SectionCarousel } from '@components/shared';

import { ProductItemType } from '@types';

export const ProductsList = async () => {
    const t = await getTranslations('products');
    const productsList = t.raw('list') as ProductItemType[];

    return (
        <Section variant="secondary">
            <div className="container">
                <SectionCarousel items={productsList} />
            </div>
        </Section>
    );
};
