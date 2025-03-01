import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@ui/button';

import { cn } from '@utils';

interface Props {
    desc: string;
    id: string;
    image: StaticImageData;
    slug: string;
    title: string;
}

const Slide = ({ desc, image, slug, title }: Props) => {
    return (
        <div className="h-[500px] w-full">
            <div className="grid h-full grid-cols-2 items-center gap-6">
                <div>
                    <div>
                        <h2 className="line-clamp-2 text-ellipsis text-6xl font-extrabold text-primary">
                            {title}
                        </h2>
                        <p className="mt-2">{desc}</p>
                    </div>

                    <Link
                        className={cn(buttonVariants({ variant: 'outline' }), 'mt-5')}
                        href={slug}
                    >
                        Детальніше
                    </Link>
                </div>

                <div className="relative h-[80%] w-full overflow-hidden rounded-3xl">
                    <Image
                        alt={title}
                        className="object-cover"
                        layout="fill"
                        placeholder="blur"
                        priority
                        src={image}
                    />
                </div>
            </div>
        </div>
    );
};

export default Slide;
