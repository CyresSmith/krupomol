import { getLocale } from 'next-intl/server';

import { ProductsService } from 'lib/services';

import { ProductList } from '@components/products';
import { Section } from '@components/shared';

import { ANCHORS } from '@constants';

export const ExportProducts = async () => {
    const locale = await getLocale();
    const products = ProductsService.getProductsList({ locale });

    return (
        <Section id={ANCHORS.export.products}>
            <div className="container">
                <ProductList items={products} />
            </div>
        </Section>
    );
};
