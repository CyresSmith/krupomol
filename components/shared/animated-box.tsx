'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface Props {
    children: ReactNode;
}

export const AnimatedBox = ({ children }: Props) => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        offset: ['start end', 'end start'],
        target: container,
    });

    const translateY = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ['30%', '0%', '0%', '-30%']);
    const scale = useTransform(
        scrollYProgress,
        [0, 0.18, 0.3, 0.7, 0.82, 1],
        ['0.9', '1.05', '1', '1', '1.05', '0.9']
    );

    return (
        <div className="container" ref={container}>
            <motion.div style={{ translateY }}>
                <motion.div style={{ scale }}>{children}</motion.div>
            </motion.div>
        </div>
    );
};
