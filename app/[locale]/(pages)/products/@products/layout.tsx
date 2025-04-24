import { PropsWithChildren } from 'react';

const ProductsLayout = ({ children }: PropsWithChildren) => {
    return <div className="container flex flex-col py-10 desktop:pt-14">{children}</div>;
};

export default ProductsLayout;
