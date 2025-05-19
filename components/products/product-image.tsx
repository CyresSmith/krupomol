'use client';

import { useContext, useEffect } from 'react';

import Image from 'next/image';

import { LenisContext } from '@components/shared';

interface Props {
    image: string;
    title: string;
}

const ProductImage = ({ image, title }: Props) => {
    const lenis = useContext(LenisContext);

    useEffect(() => {
        lenis?.scrollTo('#product', { offset: -64 });
    }, [lenis]);

    return (
        <div
            className="relative h-[400px] w-full overflow-hidden rounded-lg desktop:h-full"
            id="product"
        >
            <Image
                alt={title}
                fill
                priority
                sizes="(min-width: 1280px) 400px, (max-width: 1279px) 288px, (max-width: 767px) 288px,"
                src={image}
                style={{ objectFit: 'contain' }}
            />
        </div>
    );
};

export default ProductImage;
