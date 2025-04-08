import clsx from 'clsx';

import { Icon } from './icon';

interface Props {
    className?: string;
}

export const Loader = ({ className }: Props) => (
    <div
        className={clsx(
            'z-50 flex h-screen w-screen items-center justify-center bg-background fill-primary backdrop-blur-sm',
            className
        )}
    >
        <Icon className="animate-spin" height={50} name="wheat" width={50} />
    </div>
);
