import { ProductBreadcrumb } from '@components/products';

import { WithParams } from '@types';

const CategoryBreadcrumb = async ({
    params,
}: WithParams<{ category: string; product: string; type: string }>) => {
    const p = await params;

    return <ProductBreadcrumb {...p} />;
};

export default CategoryBreadcrumb;
