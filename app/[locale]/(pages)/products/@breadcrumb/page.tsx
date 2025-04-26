import { Locale } from 'next-intl';

import { ProductBreadcrumb } from '@components/products';

import { WithParams } from '@types';

const CategoryBreadcrumb = async ({ params }: WithParams<{ locale: Locale }>) => {
    const p = await params;

    return <ProductBreadcrumb {...p} />;
};

export default CategoryBreadcrumb;
