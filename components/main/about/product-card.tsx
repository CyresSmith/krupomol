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
        <Link className={className} href={href}>
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
                    sizes="100%"
                    src={`/images/${image}.jpg`}
                />
            </Slot>

            <h5
                className={cn(
                    'absolute inset-x-0 bottom-0 rounded-b-20 py-7 text-center text-xl font-bold text-white backdrop-blur-[15px]',
                    titleFont.className
                )}
            >
                {title}
            </h5>
        </div>
    );
};

export default ProductCard;
