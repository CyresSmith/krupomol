import Image from 'next/image';

import { InfoType } from '@types';

interface Props {
    item: InfoType;
}

export const Info = ({ item }: Props) => {
    const { icon, title } = item;

    return (
        <li className="flex items-center gap-5 fill-accent desktop:gap-7">
            <div className="relative flex size-[40px] min-w-[40px] items-center justify-center desktop:size-[50px]">
                <Image
                    alt={title}
                    className="object-contain transition"
                    fill
                    sizes="100%"
                    src={`/images/${icon}.png`}
                />
            </div>
            <p>{item.title}</p>
        </li>
    );
};
