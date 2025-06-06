'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { PropsWithChildren, useRef } from 'react';

import { Section } from './section';

import { cn } from '@utils';

interface Props {
    className?: string;
    gradientBg?: boolean;
    id?: string;
}

export const AnimatedSection = ({
    children,
    className,
    gradientBg,
    id,
}: Props & PropsWithChildren) => {
    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        offset: ['start end', 'end start'],
        target: container,
    });

    const translateY = useTransform(scrollYProgress, [0, 0.5, 0.5, 1], ['40%', '0%', '0%', '-40%']);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['0.9', '1', '1', '0.9']);

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <Section className={cn('relative', className)} id={id} ref={container}>
            <motion.div
                animate="show"
                className="container"
                initial="hidden"
                style={{ scale: scale, translateY: translateY }}
                variants={containerVariants}
            >
                {children}
            </motion.div>
            {gradientBg && (
                <span className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gray-color" />
            )}
        </Section>
    );
};
