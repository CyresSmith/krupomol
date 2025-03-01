import { type SVGProps } from 'react';

import clsx from 'clsx';

import { IconName } from '@types';

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
            className={clsx(className, className?.includes('fill') ? '' : 'fill-inherit')}
            height={height}
            width={width}
        >
            <use href={href} suppressHydrationWarning />
        </svg>
    );
};
