import Image from 'next/image';

import { ProductItemType } from '@types';

interface Props {
    item: ProductItemType;
}

export const ProductCard = ({ item }: Props) => {
    const { image, text, title } = item;
    return (
        <div className="flex flex-col gap-6">
            <Image
                alt={title}
                className="rounded-3xl object-cover"
                fill
                priority
                src={`/images/${image}.jpg`}
            />
            <h3 className="font-title text-xl font-bold">{title}</h3>
            <p className="text-black">{text}</p>
        </div>
    );
};
