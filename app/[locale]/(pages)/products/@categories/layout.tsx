import { PropsWithChildren } from 'react';

const CategoriesLayout = ({ children }: PropsWithChildren) => {
    return <div className="container flex flex-col gap-20 pt-14"> {children}</div>;
};

export default CategoriesLayout;
