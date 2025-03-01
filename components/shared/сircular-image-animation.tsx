'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import cooperation from '@assets/images/cooperation.jpg';
import quality from '@assets/images/quality.jpg';
import withHands from '@assets/images/with-hands.jpg';

const images = [cooperation, quality, withHands];

const CircularImageAnimation = () => {
    const [positions, setPositions] = useState<{ scale: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const radius = 140;
        const updatePositions = () => {
            setPositions(
                images.map((_, index) => {
                    const time = Date.now() / 50000;
                    const angle = ((time + index * 2) % 6) * (Math.PI / 3);
                    return {
                        scale: 1 + 0.3 * (1 - Math.sin(angle)),
                        x: radius * Math.cos(angle),
                        y: radius * Math.sin(angle),
                    };
                })
            );
        };

        const interval = setInterval(updatePositions, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex h-full w-full items-center justify-center">
            <div className="relative h-64 w-64">
                {positions.map((pos, index) => (
                    <motion.div
                        animate={{ scale: pos.scale, x: pos.x, y: pos.y }}
                        className="absolute size-40 overflow-hidden rounded-full border-4 border-white shadow-lg"
                        key={index}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    >
                        <Image alt="" className="object-cover" fill src={images[index] ?? ''} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CircularImageAnimation;
