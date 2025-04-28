'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import Image from 'next/image';

import { cn } from '@utils';

interface Props {
    children: React.ReactNode;
    image: string;
    noPadding?: boolean;
}

export const ImageSection = ({ children, image, noPadding = false }: Props) => {
    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
        target: container,
    });

    const y = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
    const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [1.2, 1, 1, 1.2]);

    const childrenY = useTransform(scrollYProgress, [0, 1], ['50%', '-50%']);
    const childrenScale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.85, 1, 1, 0.85]);
    const childrenOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

    return (
        <section
            className={cn(
                'relative overflow-hidden',
                !noPadding && 'py-16 tablet:py-20 desktop:py-24'
            )}
            ref={container}
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="fixed left-0 top-[-10%] h-[120%] w-full">
                <motion.div
                    animate={{ scale: 1 }}
                    className="absolute inset-0 h-full"
                    initial={{ scale: 1.1 }}
                    style={{ scale, y }}
                >
                    <Image
                        alt="image"
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={`/images/${image}.jpg`}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            </div>

            <motion.div
                className="container relative z-10"
                style={{ opacity: childrenOpacity, scale: childrenScale, y: childrenY }}
            >
                {children}
            </motion.div>
        </section>
    );
};
