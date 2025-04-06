import * as React from 'react';

import { cn } from '@utils';

export interface InputProps extends React.ComponentProps<'input'> {
    error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, type, ...props }, ref) => {
        return (
            <input
                className={cn(
                    'flex h-10 w-full rounded-xl border border-input bg-white px-3 py-1 text-lg transition file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/50 hover:ring-1 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    error &&
                        'border-destructive ring-2 ring-destructive hover:ring-2 hover:ring-destructive focus-visible:ring-2 focus-visible:ring-destructive',
                    className
                )}
                ref={ref}
                type={type}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
