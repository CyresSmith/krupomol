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
        <ul className="grid grid-cols-6 gap-5">
            {items.map(({ href, image, title }) => {
                const isActive = href === pathname;

                return (
                    <li
                        className={cn(
                            'w-full text-text-color transition hover:scale-[1.05]',
                            isActive && 'hover:scale-1.2 scale-[1.2] font-bold text-primary'
                        )}
                        key={href}
                    >
                        <Link href={href}>
                            <div className={'relative aspect-square w-full'}>
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
