import { ProductList } from './product-list';

import { Title } from '@components/shared';

import { ProductLinkItem } from '@types';

interface Props {
    id: string;
    items: ProductLinkItem[];
    title: string;
}

export const ProductTypeSection = ({ id, items, title }: Props) => {
    return (
        <div id={id}>
            <Title
                as="h2"
                className="mb-5 text-center text-2xl after:absolute after:-bottom-5 after:left-0 after:block after:w-full after:border-b-2 after:border-primary after:content-[''] tablet:text-3xl desktop:mb-14 desktop:text-4xl desktop:after:-bottom-7"
                title={title}
            />
            <ProductList items={items} />
        </div>
    );
};
