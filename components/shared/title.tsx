import { PropsWithChildren } from 'react';

import { useLocale } from 'next-intl';

import { titleFont } from '@fonts';

import { cn } from '@utils';

interface Props extends PropsWithChildren {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    id?: string;
}

export const Title = ({ as: As = 'h3', children, className, id }: Props) => {
    const locale = useLocale();

    return (
        <As
            className={cn(
                'text-5xl font-bold drop-shadow-lg',
                { 'hyphens-auto': locale === 'de' },
                titleFont.className,
                className
            )}
            id={id}
        >
            {children}
        </As>
    );
};
