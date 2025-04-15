'use client';

import { Link, usePathname } from '@i18n';

import { buttonVariants } from '@ui/button';

import { cn } from '@utils';

interface Props {
    items: { href: string; title: string }[];
}

export const ProductTypeList = ({ items = [] }: Props) => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-wrap items-center justify-center gap-5">
            {items.map(({ href, title }) => {
                return (
                    <li key={href}>
                        <Link
                            className={cn(
                                buttonVariants({
                                    variant: pathname === href ? 'primary' : 'outline-primary',
                                }),
                                'w-full'
                            )}
                            href={href}
                        >
                            {title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
