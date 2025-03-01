import { PropsWithChildren } from 'react';

import { cn } from '@utils';

interface Props extends PropsWithChildren {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export const Title = ({ as: As = 'h3', children, className }: Props) => {
    return <As className={cn('text-4xl font-bold', className)}>{children}</As>;
};
