'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { PropsWithChildren, useRef } from 'react';

import { Section } from './section';

import { cn } from '@utils';

interface Props {
    className?: string;
    gradientBg?: boolean;
}

export const AnimatedSection = ({ children, className, gradientBg }: Props & PropsWithChildren) => {
    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        offset: ['start end', 'end start'],
        target: container,
    });

    const translateY = useTransform(scrollYProgress, [0, 0.5, 0.5, 1], ['40%', '0%', '0%', '-40%']);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['0.9', '1', '1', '0.9']);

    return (
        <Section className={cn('relative', className)} ref={container}>
            <motion.div style={{ scale: scale, translateY: translateY }}>{children}</motion.div>
            {gradientBg && (
                <span className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gray-color" />
            )}
        </Section>
    );
};
