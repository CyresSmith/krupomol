'use client';

import Image from 'next/image';

import { Link, usePathname } from '@i18n';

import { cn } from '@utils';

interface Props {
    items: { href: string; image: string; title: string }[];
}

export const ProductList = ({ items = [] }: Props) => {
    const pathname = usePathname();

    return (
        <ul className="flex flex-wrap items-center justify-center gap-5">
            {items.map(({ href, image, title }) => {
                const isActive = href === pathname;

                return (
                    <li
                        className={cn(
                            'w-[calc((100%-(theme(space.5)*1))/2)] transition hover:scale-[1.05] tablet:w-[calc((100%-(theme(space.5)*3))/4)] desktop:w-[calc((100%-(theme(space.5)*5))/6)]',
                            isActive && 'hover:scale-1.2 scale-[1.2] font-bold'
                        )}
                        key={href}
                    >
                        <Link href={href}>
                            <div className={'relative aspect-square h-full w-full'}>
                                <Image
                                    alt={title}
                                    fill
                                    priority
                                    sizes="100%"
                                    src={image}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                            <p className="mt-3 flex h-12 items-start justify-center text-center">
                                {title}
                            </p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
