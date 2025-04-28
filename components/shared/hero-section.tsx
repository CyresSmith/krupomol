'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import Image, { StaticImageData } from 'next/image';

interface Props {
    children: React.ReactNode;
    image: StaticImageData;
}

export const HeroSection = ({ children, image }: Props) => {
    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        layoutEffect: false,
        offset: ['start start', 'end start'],
        target: container,
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const childrenY = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '50%', '100%']);
    const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '30%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const childrenScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

    const transition = {
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
    };

    return (
        <section className="relative overflow-hidden pb-36 pt-64" ref={container}>
            <motion.div
                animate={{ scale: 1 }}
                className="absolute inset-0 h-full"
                initial={{ scale: 1.2 }}
                style={{ scale, y }}
                transition={transition}
            >
                <Image
                    alt="image"
                    className="object-cover"
                    fill
                    placeholder="blur"
                    sizes="100vw"
                    src={image}
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

            <motion.div
                animate={{ opacity: '100%', top: 0 }}
                className="container relative z-10"
                exit={{ opacity: '0%', top: -100 }}
                initial={{ opacity: '0%', top: -100 }}
                style={{ opacity, scale: childrenScale, y: childrenY }}
                transition={transition}
            >
                {children}
            </motion.div>
        </section>
    );
};
