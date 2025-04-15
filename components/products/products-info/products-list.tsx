import Image from 'next/image';

interface Props {
    items: { href: string; image: string; title: string }[];
}

export const ProductsList = ({ items }: Props) => {
    console.log('🚀 ~ ProductsList ~ items:', items);
    return (
        <ul className="flex items-center justify-center gap-5">
            {items.map(({ href, image, title }) => (
                <li key={title}>
                    <figure className="relative size-64">
                        <Image
                            alt={title}
                            fill
                            objectFit="cover"
                            sizes="100%"
                            src={`/images/products/${image}.jpg`}
                        />

                        <figcaption>{title}</figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    );
};
