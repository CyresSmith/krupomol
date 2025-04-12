import Image from 'next/image';

import { Title } from '@components/shared';

import { AdvantageType } from '@types';

const Advantage = ({ icon, text, title }: AdvantageType) => {
    return (
        <li className="flex gap-8 rounded-40 bg-primary px-3 py-8 text-background mobile:gap-3 mobile:rounded-20 tablet:px-8 desktop:gap-8 desktop:px-24 desktop:py-12">
            <div className="relative flex size-[52px] min-w-[52px] items-center justify-center desktop:size-[68px]">
                <Image
                    alt={title}
                    className="object-contain transition"
                    fill
                    sizes="100%"
                    src={`/images/${icon}.png`}
                />
            </div>

            <div className="max-w-[calc(100%-(48px+theme(space.3)))] text-center">
                <Title
                    as="h6"
                    className="text-md mb-1 truncate tablet:text-lg desktop:mb-4 desktop:text-xl"
                >
                    {title}
                </Title>

                <p className="truncate text-xs tablet:text-sm desktop:text-base">{text}</p>
            </div>
        </li>
    );
};

export default Advantage;
