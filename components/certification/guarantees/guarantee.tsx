import { GuaranteeType } from 'lib/types/guarantee.types';

import { AnimatedCard, AnimatedTextBox, Title } from '@components/shared';

interface Props {
    item: GuaranteeType;
}

export const Guarantee = ({ item }: Props) => {
    const { desc, title } = item;

    return (
        <li className="h-full">
            <AnimatedCard className="flex h-full w-full flex-col gap-4 rounded-20 bg-white px-4 py-6 text-primary desktop:rounded-40 desktop:px-12 desktop:py-8">
                <AnimatedTextBox from="top">
                    <Title as="h4" className="text-xl leading-[140%]" title={title} />
                </AnimatedTextBox>

                <AnimatedTextBox from="bottom">
                    <p className="text-left text-sm desktop:text-base">{desc}</p>
                </AnimatedTextBox>
            </AnimatedCard>
        </li>
    );
};
