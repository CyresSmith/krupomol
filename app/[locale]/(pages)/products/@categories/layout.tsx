import { PropsWithChildren } from 'react';

const CategoriesLayout = ({ children }: PropsWithChildren) => {
    return <div className="container flex flex-col"> {children}</div>;
};

export default CategoriesLayout;
