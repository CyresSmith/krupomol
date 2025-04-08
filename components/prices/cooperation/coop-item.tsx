import { CooperationType } from 'lib/types/cooperation.types';

import { Icon } from '@components/shared';

interface Props {
    item: CooperationType;
}

export const CoopItem = ({ item }: Props) => {
    const { desc, icon, title } = item;

    return (
        <li className="duration-150 linear flex w-full items-center gap-3 rounded-20 bg-primary fill-transparent stroke-accent px-6 py-12 text-white transition hover:scale-[1.01] desktop:gap-4">
            <Icon height={32} name={icon} width={32} />
            <div>
                <p className="pb-4 font-title text-lg font-bold">{title}</p>
                <span className="text-base">{desc}</span>
            </div>
        </li>
    );
};
