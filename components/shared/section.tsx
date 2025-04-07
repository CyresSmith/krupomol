import { PropsWithChildren } from 'react';

import { cn } from '@utils';

interface SectionProps {
    className?: string;
    id?: string;
    noPadding?: boolean;
    variant?: 'default' | 'secondary';
}

export const Section = ({
    children,
    className,
    id,
    noPadding = false,
    variant = 'default',
}: PropsWithChildren & SectionProps) => {
    return (
        <section
            className={cn(
                {
                    'bg-secondary': variant === 'secondary',
                    'py-16 tablet:py-20 desktop:py-24': !noPadding,
                },
                className
            )}
            id={id}
        >
            {children}
        </section>
    );
};
