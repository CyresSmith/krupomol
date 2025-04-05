'use client';

import { Icon } from '@components/shared';

interface Props {
    setOpen: (open: boolean) => void;
}

export const MenuBtn = ({ setOpen }: Props) => {
    return (
        <>
            <button
                className="flex items-center justify-center fill-background tablet:hidden desktop:hidden"
                onClick={() => setOpen(true)}
                type="button"
            >
                <Icon height={16} name="menu_icon" width={35} />
            </button>
        </>
    );
};
