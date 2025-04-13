import { PropsWithChildren, Ref } from 'react';

import { cn } from '@utils';

interface SectionProps {
    className?: string;
    id?: string;
    noPadding?: boolean;
    ref?: Ref<HTMLElement>;
    variant?: 'default' | 'secondary';
}

export const Section = ({
    children,
    className,
    id,
    noPadding = false,
    ref,
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
            ref={ref}
        >
            {children}
        </section>
    );
};
