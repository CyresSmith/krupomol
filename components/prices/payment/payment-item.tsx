import Image from 'next/image';

import { ConditionType } from 'lib/types/conditions.types';

interface Props {
    item: ConditionType;
}

export const PaymentItem = ({ item }: Props) => {
    const { icon, list } = item;

    return (
        <li className="flex w-full flex-col items-center">
            <div className="relative mb-3 flex size-[64px] min-w-[64px] items-center justify-center desktop:size-[50px]">
                <Image
                    alt={icon}
                    className="object-contain transition"
                    fill
                    sizes="64px"
                    src={`/images/${icon}.png`}
                />
            </div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>
                        <p className="text-center">{`${i + 1}. ${item}`}</p>
                    </li>
                ))}
            </ul>
        </li>
    );
};
