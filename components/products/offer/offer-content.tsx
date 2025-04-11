'use client';

import { useInView } from 'react-intersection-observer';

import { Title } from '@components/shared';

import { cn } from '@utils';

interface Props {
    text: string;
    title: string;
}

export const OfferContent = ({ text, title }: Props) => {
    const { inView, ref } = useInView({ threshold: 1, triggerOnce: false });

    return (
        <div className="container" ref={ref}>
            <div
                className={cn(
                    'duration-500 translate-y-[100%] overflow-hidden rounded-3xl bg-accent px-6 py-10 opacity-0 transition desktop:px-16 desktop:py-20',
                    inView && 'opacity-1 translate-y-0'
                )}
            >
                <Title
                    as="h3"
                    className={cn(
                        'font-primary duration-500 ease-in-out mb-5 translate-y-[-100%] text-center text-[36px] font-bold leading-[140%] opacity-0 transition delay-300 desktop:text-5xl',
                        inView && 'opacity-1 translate-y-0'
                    )}
                >
                    {title}
                </Title>
                <p
                    className={cn(
                        'duration-500 ease-in-out mb-5 translate-y-[100%] text-base leading-5 text-black opacity-0 transition delay-300',
                        inView && 'opacity-1 translate-y-0'
                    )}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};
