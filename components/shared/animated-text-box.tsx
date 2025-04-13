import { motion, useInView } from 'motion/react';
import { PropsWithChildren, useRef } from 'react';

import { cn } from '@utils';

interface Props {
    className?: string;
    from: 'bottom' | 'top';
    triggerOnce?: boolean;
    viewAmount?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}

export const AnimatedTextBox = ({
    children,
    className,
    from,
    triggerOnce = false,
    viewAmount = 1,
}: Props & PropsWithChildren) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { amount: viewAmount, once: triggerOnce });

    return (
        <motion.div className={cn(className, 'overflow-hidden')} ref={ref}>
            <motion.div
                animate={
                    isInView
                        ? { transition: { duration: 0.5 }, y: 0 }
                        : from === 'top'
                          ? { y: '-150%' }
                          : { y: '150%' }
                }
            >
                {children}
            </motion.div>
        </motion.div>
    );
};
