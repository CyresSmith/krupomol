import Image from 'next/image';

import { titleFont } from '@fonts';

import { cn } from '@utils';

interface Props {
    image: string;
    title: string;
}

const ProductCard = ({ image, title }: Props) => {
    return (
        <li className="rounded-20 group relative w-full overflow-hidden" key={title}>
            <Image
                alt={title}
                className="object-cover transition group-hover:scale-110"
                fill
                sizes="100vw"
                src={`/images/${image}.jpg`}
            />
            <h5
                className={cn(
                    'absolute inset-x-0 bottom-0 py-7 text-center text-xl font-bold text-white backdrop-blur-[15px]',
                    titleFont.className
                )}
            >
                {title}
            </h5>
            s
        </li>
    );
};

export default ProductCard;
