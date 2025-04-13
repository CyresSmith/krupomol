import { PropsWithChildren } from 'react';

import { cn } from '@utils';

export const BorderCard = ({ children, className }: { className?: string } & PropsWithChildren) => {
    return (
        <div
            className={cn(
                'z-50 rounded-40 border-7 border-accent bg-black/25 px-14 py-16 backdrop-blur-sm mobile:px-6 mobile:py-16 tablet:px-8 tablet:py-16',
                className
            )}
        >
            {children}
        </div>
    );
};
