import { PropsWithChildren } from 'react';

import { Section } from '@components/shared';

import { ANCHORS } from '@constants';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Section className="!pb-0" id={ANCHORS.prices.prices} variant="secondary">
            <div className="container">{children}</div>
        </Section>
    );
};

export default Layout;
