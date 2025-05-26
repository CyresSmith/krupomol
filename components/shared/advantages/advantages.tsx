import Advantage from './advantage';

import { AnimatedTextBox, Section, Title } from '@components/shared';

import { AdvantageType } from '@types';

interface Props {
    advantages: AdvantageType[];
    id?: string;
    title: string;
}

export const Advantages = ({ advantages, id, title }: Props) => {
    return (
        <Section id={id} variant="secondary">
            <div className="container">
                <AnimatedTextBox from="top">
                    <Title
                        as="h3"
                        className="mb-9 text-center text-5xl mobile:text-[34px]"
                        title={title}
                    />
                </AnimatedTextBox>

                <ul className="grid grid-cols-2 justify-center gap-4 mobile:grid-cols-1">
                    {advantages.map(advantage => (
                        <Advantage key={advantage.title} {...advantage} />
                    ))}
                </ul>
            </div>
        </Section>
    );
};
