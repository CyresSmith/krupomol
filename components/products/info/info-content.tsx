'use client';

import { useInView } from 'react-intersection-observer';

import { Info } from './info';

import { Title } from '@components/shared';

import { IconName } from '@types';

import { cn } from '@utils';

interface Props {
    infoList: { icon: IconName; title: string }[];
    title: string;
}

export const InfoContent = ({ infoList, title }: Props) => {
    const { inView, ref } = useInView({ threshold: 1, triggerOnce: false });

    return (
        <div className="z-1 container relative" ref={ref}>
            <div className="w-full overflow-hidden rounded-3xl border-[7px] border-solid border-accent px-5 py-16 tablet:w-1/2 desktop:w-1/2 desktop:py-14 desktop:pl-14">
                <Title
                    as="h3"
                    className={cn(
                        'duration-1000 easy-out mb-7 translate-x-[-100%] text-4xl font-bold leading-[140%] text-white opacity-0 transition desktop:text-5xl',
                        inView && 'opacity-1 translate-x-0'
                    )}
                >
                    {title}
                </Title>
                <ul
                    className={cn(
                        'duration-1000 easy-out flex translate-x-[100%] flex-col gap-5 font-title text-base font-bold text-white opacity-0 transition',
                        inView && 'opacity-1 translate-x-0'
                    )}
                >
                    {infoList.map((item, i) => (
                        <Info item={item} key={i} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
