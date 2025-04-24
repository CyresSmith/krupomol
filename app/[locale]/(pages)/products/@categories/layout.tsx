import { PropsWithChildren } from 'react';

const CategoriesLayout = ({ children }: PropsWithChildren) => {
    return <div className="container flex flex-col pt-10 desktop:pt-14"> {children}</div>;
};

export default CategoriesLayout;
