import clsx from 'clsx';

import { Icon } from './icon';

interface Props {
    className?: string;
}

export const Loader = ({ className }: Props) => (
    <div
        className={clsx(
            'bg-loader-backdrop z-50 flex h-full w-full items-center justify-center fill-primary backdrop-blur-sm',
            className
        )}
    >
        <Icon className="animate-spin" height={50} name="wheat" width={50} />
    </div>
);
