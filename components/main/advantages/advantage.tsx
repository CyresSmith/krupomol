import Image from 'next/image';

import { Title } from '@components/shared';

import { AdvantageType } from '@types';

const Advantage = ({ icon, text, title }: AdvantageType) => {
    return (
        <li className="flex gap-8 rounded-40 bg-primary px-20 py-12 text-background">
            <div className="relative flex size-[68px] items-center justify-center">
                <Image
                    alt={title}
                    className="object-contain transition"
                    fill
                    sizes="100vw"
                    src={`/images/${icon}.png`}
                />
            </div>

            <div className="text-center">
                <Title as="h6" className="mb-4 text-xl">
                    {title}
                </Title>

                <p>{text}</p>
            </div>
        </li>
    );
};

export default Advantage;
