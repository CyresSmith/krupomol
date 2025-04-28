import { ProductBreadcrumb } from '@components/products';

import { WithParams } from '@types';

const CategoryBreadcrumb = async ({ params }: WithParams<{ category: string }>) => {
    const { category } = await params;

    return <ProductBreadcrumb category={category} />;
};

export default CategoryBreadcrumb;
