import { type SVGProps } from 'react';

import { IconName } from '@types';

import { cn } from '@utils';

type Props = {
    height?: number;
    name: IconName;
    width?: number;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ className, height = 24, name, width = 24, ...props }: Props) => {
    const href = `/icons/sprite.svg#${name}`;

    return (
        <svg
            {...props}
            className={cn(
                className,
                className?.includes('fill') ? '' : 'fill-inherit',
                name === 'loader' && 'animate-spin'
            )}
            height={height}
            width={width}
        >
            <use href={href} suppressHydrationWarning />
        </svg>
    );
};
