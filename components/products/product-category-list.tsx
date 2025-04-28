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
        <ul className="flex flex-wrap items-center justify-center gap-5">
            {items.map(({ href, title }) => {
                return (
                    <li
                        className="w-full tablet:w-[calc((100%-(theme(space.5)*2))/3)] desktop:w-[calc((100%-(theme(space.5)*3))/4)]"
                        key={href}
                    >
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
