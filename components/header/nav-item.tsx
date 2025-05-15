'use client';

import { ChevronRight } from 'lucide-react';
import { PropsWithChildren, useState } from 'react';

import { navigationMenuTriggerStyle } from '@ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';

import { LinkWithHash } from '@components/shared';

import { NavItemType } from '@types';

import { cn } from '@utils';

interface IsChildren extends Omit<NavItemType, 'title'>, PropsWithChildren {
    isActive?: boolean;
    isChildren?: boolean;
    open?: boolean;
}

const NavItemLink = ({
    children,
    href,
    isActive = false,
    isChildren,
    open = false,
}: IsChildren) => {
    return (
        <LinkWithHash
            className={cn(
                'relative w-full',
                isActive &&
                    'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:border-b-2 after:border-accent after:content-[""]',
                {
                    ['bg-primary text-background']: isChildren && open,
                    [navigationMenuTriggerStyle()]: !isChildren,
                    ['text-accent']: !isChildren && open,
                    ['text-md flex w-full items-center justify-between gap-3 rounded-full px-5 py-3 font-title transition hover:bg-primary hover:text-background']:
                        isChildren,
                }
            )}
            href={href}
        >
            {children}
        </LinkWithHash>
    );
};

const NavItem = ({
    href,
    isActive = false,
    isChildren = false,
    links,
    title,
}: IsChildren & NavItemType) => {
    const [open, setOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | undefined>(undefined);

    const handleHover = (type: 'enter' | 'leave') => {
        if (hoverTimeout) clearTimeout(hoverTimeout);

        if (type === 'enter') {
            const timeout = setTimeout(() => setOpen(true), isChildren ? 0 : 450);
            setHoverTimeout(timeout);
        } else {
            setOpen(false);
            setHoverTimeout(undefined);
        }
    };

    return href.hash === 'consultation' ? null : (
        <li
            className={cn('flex', isChildren && 'min-w-[200px] px-2')}
            key={href.pathname + href.hash}
            // onMouseEnter={() => setOpen(true)}
            // onMouseLeave={() => setOpen(false)}
            onMouseEnter={() => handleHover('enter')}
            onMouseLeave={() => handleHover('leave')}
        >
            {links && links.length > 0 ? (
                <Popover key={title} onOpenChange={setOpen} open={open}>
                    <PopoverTrigger className="flex w-full items-center justify-between outline-none">
                        <NavItemLink
                            href={href}
                            isActive={isActive}
                            isChildren={isChildren}
                            open={open}
                        >
                            {title}
                            {isChildren && <ChevronRight />}
                        </NavItemLink>
                    </PopoverTrigger>

                    <PopoverContent
                        align={isChildren ? 'start' : 'center'}
                        alignOffset={-8}
                        className="w-fit p-0"
                        side={isChildren ? 'right' : 'bottom'}
                        sideOffset={!isChildren ? -2 : 8}
                    >
                        <ul className="py-2">
                            {links.map(item => (
                                <NavItem {...item} isChildren key={item.title} />
                            ))}
                        </ul>
                    </PopoverContent>
                </Popover>
            ) : (
                <NavItemLink href={href} isActive={isActive} isChildren={isChildren} open={open}>
                    {title}
                </NavItemLink>
            )}
        </li>
    );
};

export default NavItem;
