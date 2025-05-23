import { PropsWithChildren } from 'react';

import Image from 'next/image';

import { Link } from '@i18n';

import { titleFont } from '@fonts';

import { cn } from '@utils';

interface Props {
    href?: string;
    image: string;
    title: string;
}

const Slot = ({
    children,
    className,
    href,
}: PropsWithChildren<{ className?: string; href?: string }>) => {
    return href ? (
        <Link className={className} href={href} scroll={false}>
            {children}
        </Link>
    ) : (
        <div className={className}>{children}</div>
    );
};

const ProductCard = ({ href, image, title }: Props) => {
    return (
        <div className="group relative h-[360px] w-full overflow-hidden rounded-20" key={title}>
            <Slot className="relative block h-full w-full overflow-hidden" href={href}>
                <Image
                    alt={title}
                    className="object-cover transition group-hover:scale-110"
                    fill
                    sizes="(max-width: 1279px) 235px, (min-width: 1280px) 300px, (max-width: 767px) 280px,"
                    src={`/images/${image}.jpg`}
                />
            </Slot>

            <h4
                className={cn(
                    'absolute inset-x-0 bottom-0 rounded-b-20 py-7 text-center text-xl font-bold text-white backdrop-blur-[15px]',
                    titleFont.className
                )}
            >
                {title}
            </h4>
        </div>
    );
};

export default ProductCard;
