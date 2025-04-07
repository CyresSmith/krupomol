import * as React from 'react';

import { cn } from '@utils';

export interface TextareaProps extends React.ComponentProps<'textarea'> {
    error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'md:text-sm flex min-h-[60px] w-full rounded-xl border border-input bg-white px-3 py-2 text-base shadow-sm transition placeholder:text-muted-foreground/50 hover:ring-1 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    error &&
                        'border-destructive ring-2 ring-destructive hover:ring-2 hover:ring-destructive focus-visible:ring-2 focus-visible:ring-destructive',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';

export { Textarea };
