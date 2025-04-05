import Image from 'next/image';

import { ProductItemType } from '@types';

interface Props {
    item: ProductItemType;
}

export const ProductCard = ({ item }: Props) => {
    const { description, image, title } = item;
    return (
        <div className="flex w-[390px] flex-col gap-6">
            <Image
                alt={title}
                className="block h-[462px] w-auto rounded-3xl object-cover"
                src={image}
            />
            <h3 className="font-title text-xl font-bold">{title}</h3>
            <p className="text-black">{description}</p>
        </div>
    );
};
