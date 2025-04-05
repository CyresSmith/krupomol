import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
        variants: {
            size: {
                default: 'h-[52px] px-6 py-3',
                icon: 'h-9 w-9',
                lg: 'h-[60px] px-6 py-3',
                sm: 'h-8 px-3 text-xs',
            },
            variant: {
                default: 'bg-background text-foreground fill-foreground shadow hover:bg-secondary',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                ghost: 'hover:bg-accent hover:text-accent-foreground hover:fill-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                outline:
                    'border border-background text-background hover:bg-background focus:bg-background hover:text-primary focus:text-primary shadow-sm',
                'outline-primary':
                    'border border-primary text-primary hover:bg-background focus:bg-background shadow-sm',
                secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
            },
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ asChild = false, className, size, variant, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ className, size, variant }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
