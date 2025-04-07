import Image from 'next/image';

import { ProductItemType } from '@types';

interface Props {
    item: ProductItemType;
}

export const ProductCard = ({ item }: Props) => {
    const { image, text, title } = item;
    return (
        <div className="flex w-[284px] flex-col gap-6 tablet:w-[360px] desktop:w-[392px]">
            <div className="relative h-[460px] overflow-hidden rounded-20">
                <Image
                    alt={title}
                    className="object-cover"
                    fill
                    priority
                    src={`/images/${image}.jpg`}
                />
            </div>
            <h3 className="font-title text-xl font-bold">{title}</h3>
            <p className="leading-5 text-black">{text}</p>
        </div>
    );
};
