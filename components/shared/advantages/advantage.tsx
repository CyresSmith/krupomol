'use client';

import Image from 'next/image';

import { AnimatedCard, Title } from '@components/shared';

import { AdvantageType } from '@types';

const Advantage = ({ icon, text, title }: AdvantageType) => {
    return (
        <li>
            <AnimatedCard className="grid w-full grid-cols-[44px,1fr] gap-8 rounded-40 bg-primary px-3 py-8 text-background mobile:gap-3 mobile:rounded-20 tablet:px-8 desktop:grid-cols-[70px,1fr] desktop:gap-8 desktop:px-20 desktop:py-12">
                <div className="relative aspect-square w-[full]">
                    <Image
                        alt={title}
                        className="object-contain transition"
                        fill
                        sizes="100%"
                        src={`/images/${icon}.png`}
                    />
                </div>

                <div className="max-w-full overflow-hidden text-center">
                    <Title
                        as="h6"
                        className="text-md mb-1 w-full truncate tablet:text-lg desktop:mb-4 desktop:text-xl"
                        title={title}
                    />

                    <p className="w-full truncate text-xs tablet:text-sm desktop:text-base">
                        {text}
                    </p>
                </div>
            </AnimatedCard>
        </li>
    );
};

export default Advantage;
