import type { ReactNode } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { Icon } from './icon';

import { buttonVariants } from '@ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@ui/carousel';

import { cn } from '@utils';

interface Props {
    href?: string;
    items?: ReactNode[];
    linkLabel?: string;
}

export const SectionCarousel = ({ href, items = [], linkLabel }: Props) => {
    return (
        <Carousel
            opts={{
                align: 'start',
                duration: 60,
                loop: true,
            }}
        >
            <div className="overflow-hidden rounded-3xl">
                <CarouselContent>
                    {items.map((item, i) => (
                        <CarouselItem className="tablet:basis-1/3 desktop:basis-1/4" key={i}>
                            {item}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </div>

            <div
                className={clsx(
                    'mt-9 flex items-center',
                    href && linkLabel ? 'justify-between' : 'justify-end'
                )}
            >
                {items.length > 3 && (
                    <div className="flex gap-3 tablet:gap-4 desktop:gap-5">
                        <CarouselPrevious
                            className="relative left-0 top-0 size-9 translate-x-0 translate-y-0"
                            size={'icon'}
                            variant={'ghost'}
                        />
                        <CarouselNext
                            className="relative left-0 top-0 size-9 translate-x-0 translate-y-0"
                            size={'icon'}
                            variant={'ghost'}
                        />
                    </div>
                )}

                {href && linkLabel && (
                    <Link
                        className={cn(
                            'z-50 mobile:w-full',
                            buttonVariants({ size: 'lg', variant: 'primary' })
                        )}
                        href={href}
                    >
                        {linkLabel}

                        <Icon className="ml-8" name="arrow-right-top" />
                    </Link>
                )}
            </div>
        </Carousel>
    );
};
