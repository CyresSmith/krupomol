import { useState } from 'react';

import Link from 'next/link';

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuGroup,
// } from '@ui/dropdown-menu';
import { NavigationMenuItem, navigationMenuTriggerStyle } from '@ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';

// import { NavigationTitle } from '@types';

import { cn } from '@utils';

interface Props {
    anchors: string[];
    href?: string;
    isActive: boolean;
    onItemClick?: () => void;
    title: string;
}

export const NavMenuItem = ({ anchors, href, isActive, onItemClick, title }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <NavigationMenuItem
            className="flex h-full items-center"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Popover onOpenChange={setOpen} open={open}>
                <PopoverTrigger asChild>
                    <Link
                        className={cn(
                            'relative',
                            navigationMenuTriggerStyle(),
                            isActive &&
                                'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:border-b-2 after:border-accent after:content-[""]'
                        )}
                        href={href ?? '/'}
                        onClick={onItemClick}
                    >
                        {title}
                    </Link>
                </PopoverTrigger>

                {anchors.length > 0 && (
                    <PopoverContent align="start" className="flex flex-col gap-1" side="bottom">
                        {anchors.map((anchor, i) => (
                            <Link
                                className="rounded-md px-4 py-2 text-sm hover:bg-accent/20"
                                href={`${href}${anchor}`}
                                key={i}
                            >
                                {anchor}
                            </Link>
                        ))}
                    </PopoverContent>
                )}
            </Popover>
        </NavigationMenuItem>
        // <NavigationMenuItem
        //     className="relative"
        //     onMouseEnter={() => setOpen(true)}
        //     onMouseLeave={() => setOpen(false)}
        // >
        //     <Link
        //         className={cn(
        //             navigationMenuTriggerStyle(),
        //             isActive &&
        //                 'after:absolute after:bottom-0 after:left-0 after:block after:w-full after:border-b-2 after:border-accent after:content-[""]'
        //         )}
        //         href={href ?? '/'}
        //     >
        //         {title}
        //     </Link>

        //     <DropdownMenu onOpenChange={setOpen} open={open}>
        //         <DropdownMenuContent align="start" side="bottom">
        //             <DropdownMenuGroup>
        //                 {anchors.map((anchor, i) => (
        //                     <DropdownMenuItem asChild key={i}>
        //                         <Link href={`${href}${anchor}`}>{anchor}</Link>
        //                     </DropdownMenuItem>
        //                 ))}
        //             </DropdownMenuGroup>
        //         </DropdownMenuContent>
        //     </DropdownMenu>
        // </NavigationMenuItem>
    );
};
