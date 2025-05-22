'use client';

import Image from 'next/image';

import { Link, usePathname } from '@i18n';

import { ProductLinkItem } from '@types';

import { cn } from '@utils';

interface Props {
    items: ProductLinkItem[];
}

export const ProductList = ({ items = [] }: Props) => {
    const pathname = usePathname();

    return (
        <ul className="grid grid-cols-2 gap-3 tablet:grid-cols-3 desktop:grid-cols-6">
            {items.map(({ href, image, title }) => {
                const isActive = href === pathname;

                return (
                    <li key={href}>
                        <Link
                            aria-label={title}
                            className={cn(
                                'block h-full w-full rounded-3xl bg-transparent p-3 text-text-color transition tablet:p-4 desktop:p-6',
                                isActive && 'bg-primary text-primary-foreground shadow-sm',
                                !isActive && 'hover:bg-gray-color focus:bg-gray-color'
                            )}
                            href={href}
                            scroll={false}
                        >
                            <div className={'relative aspect-square w-full'}>
                                <Image
                                    alt={title}
                                    fill
                                    priority
                                    sizes="250px"
                                    src={image}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                            <p className="mt-6 flex items-start justify-center hyphens-auto text-center">
                                {title}
                            </p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
