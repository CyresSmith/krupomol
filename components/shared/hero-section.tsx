'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import Image from 'next/image';

interface Props {
    bgName: string;
    children: React.ReactNode;
}

export const HeroSection = ({ bgName, children }: Props) => {
    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        offset: ['start start', 'end start'],
        target: container,
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '30%']);
    const scale = useTransform(scrollYProgress, [0, 1], ['1', '1.2']);

    return (
        <section className="relative h-[684px] overflow-hidden pb-36 pt-64" ref={container}>
            <motion.div className="absolute inset-0 h-full" style={{ scale, y }}>
                <Image
                    alt="image"
                    className="object-cover"
                    fill
                    priority
                    sizes="100vw"
                    src={`/images/${bgName}.jpg`}
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

            <motion.div className="container relative z-10" style={{ opacity }}>
                {children}
            </motion.div>
        </section>
    );
};
