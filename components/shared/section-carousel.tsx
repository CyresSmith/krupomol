'use client';

import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@ui/carousel';

import { ProductCard } from '@components/products/list/product-card';

import { ProductItemType } from '@types';

interface Props {
    items: ProductItemType[];
}

export const SectionCarousel = ({ items = [] }: Props) => {
    return (
        <Carousel
            opts={{
                align: 'start',
                duration: 30,
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
        >
            <CarouselContent>
                {items.map((item, i) => (
                    <CarouselItem
                        className="mobile:basis-1/1 tablet:basis-1/2 desktop:basis-1/3"
                        key={i}
                    >
                        <ProductCard item={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className={clsx('mt-6 flex items-center justify-between')}>
                {items.length > 3 && (
                    <div className="flex w-full justify-between">
                        <CarouselPrevious size={'fit'} variant={'icon'} />
                        <CarouselNext size={'fit'} variant={'icon'} />
                    </div>
                )}
            </div>
        </Carousel>
    );
};
