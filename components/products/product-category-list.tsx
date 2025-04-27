'use client';

import { Link, usePathname } from '@i18n';

import { buttonVariants } from '@ui/button';

import { CardLinkItem } from '@types';

import { cn } from '@utils';

interface Props {
    items: Omit<CardLinkItem, 'image'>[];
}

export const ProductCategoryList = ({ items = [] }: Props) => {
    const pathname = usePathname();

    return (
        <ul className="grid grid-cols-2 gap-5 tablet:grid-cols-3 desktop:grid-cols-4">
            {items.map(({ href, title }) => {
                return (
                    <li key={href}>
                        <Link
                            className={cn(
                                buttonVariants({
                                    variant: pathname.includes(href)
                                        ? 'primary'
                                        : 'outline-primary',
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
