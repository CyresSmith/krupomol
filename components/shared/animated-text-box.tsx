'use client';

import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

interface Props {
    className?: string;
    from: 'bottom' | 'left' | 'right' | 'top';
}

export const AnimatedTextBox = ({
    children,
    className,
    from = 'bottom',
}: Props & PropsWithChildren) => {
    const isVerticalFrom = from === 'top' || from === 'bottom';
    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: isVerticalFrom ? 0.5 : 0,
            x: !isVerticalFrom ? (from === 'right' ? '75%' : '-75%') : 0,
            y: isVerticalFrom ? (from === 'bottom' ? '100%' : '-100%') : 0,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                scale: { bounce: 0.3, type: 'spring' },
            },
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            variants={itemVariants}
            viewport={{ once: true }}
            whileInView="show"
        >
            {children}
        </motion.div>
    );
};
