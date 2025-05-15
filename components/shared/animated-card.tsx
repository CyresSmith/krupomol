'use client';

import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

import { cn } from '@utils';

const cardVariants = {
    cardHidden: { opacity: 0, scale: 0.5 },
    cardShow: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            scale: { bounce: 0.2, type: 'spring' },
            staggerChildren: 0.5,
        },
        y: 0,
    },
};

export const AnimatedCard = ({
    children,
    className,
}: { className?: string } & PropsWithChildren) => {
    return (
        <motion.div
            className={cn(
                'relative rounded-40 bg-accent px-6 py-16 tablet:px-8 desktop:px-16',
                className
            )}
            initial={['cardHidden', 'hidden']}
            variants={cardVariants}
            viewport={{ amount: 0.3, once: true }}
            whileInView={['cardShow', 'show']}
        >
            {children}
        </motion.div>
    );
};
