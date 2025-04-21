'use client';

import { useContext, useEffect } from 'react';

import { LenisContext, Title } from '@components/shared';

interface Props {
    title: string;
}

const ProductTitle = ({ title }: Props) => {
    const lenis = useContext(LenisContext);

    useEffect(() => {
        lenis?.scrollTo('#product', { offset: -100 });
    }, []);

    return (
        <Title as="h2" className="text-4xl font-bold uppercase" id="product">
            {title}
        </Title>
    );
};

export default ProductTitle;
