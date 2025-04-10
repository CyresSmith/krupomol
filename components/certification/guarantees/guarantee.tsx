import { GuaranteeType } from 'lib/types/garantie.types';

import { Title } from '@components/shared';

interface Props {
    item: GuaranteeType;
}

export const Guarantee = ({ item }: Props) => {
    const { desc, title } = item;

    return (
        <li className="flex w-full flex-col gap-4 rounded-20 bg-white px-4 py-6 text-primary desktop:rounded-40 desktop:px-12 desktop:py-8">
            <Title as="h6" className="text-xl leading-[140%]">
                {title}
            </Title>
            <p className="text-left text-sm desktop:text-base">{desc}</p>
        </li>
    );
};
