import { PropsWithChildren } from 'react';

import { AnimatedCard } from './animated-card';

import { cn } from '@utils';

export const BorderCard = ({ children, className }: { className?: string } & PropsWithChildren) => {
    return (
        <AnimatedCard
            className={cn(
                'z-50 border-7 border-accent bg-black/25 backdrop-blur-sm mobile:pt-16',
                className
            )}
        >
            {children}
        </AnimatedCard>
    );
};
