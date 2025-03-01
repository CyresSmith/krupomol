import { PropsWithChildren } from 'react';

import { Footer } from '@components/footer';
import { Header } from '@components/header';

const PagesLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header fixed />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
        </>
    );
};

export default PagesLayout;
