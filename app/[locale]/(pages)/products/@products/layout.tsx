import { PropsWithChildren } from 'react';

const ProductsLayout = ({ children }: PropsWithChildren) => {
    return <div className="container flex flex-col gap-20 py-14">{children}</div>;
};

export default ProductsLayout;
