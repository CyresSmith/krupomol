'use client';

// import { useState } from 'react';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';

import {
    Carousel,
    // CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@ui/carousel';

// import { DotButton, useDotButton } from '@components/hero/dot-button';
import { ProductCard } from '@components/products/product-card';

import { ProductItemType } from '@types';

// import { cn } from '@utils';

interface Props {
    items: ProductItemType[];
}

export const SectionCarousel = ({ items = [] }: Props) => {
    // const [api, setApi] = useState<CarouselApi>();

    // const { onDotButtonClick, selectedIndex } = useDotButton(api);

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
            // setApi={setApi}
        >
            <CarouselContent>
                {items.map((item, i) => (
                    <CarouselItem
                        className="mobile:basis-1/1 tablet:basis-1/2 desktop:basis-1/3"
                        key={i}
                    >
                        {/* <div className="flex max-w-[390px] flex-col gap-6">
                            <div
                                    className={clsx(
                                        'h-auto max-w-[390px] items-center justify-center overflow-hidden rounded-3xl bg-secondary p-4 transition'
                                    )}
                                >
                            <Image
                                alt={'Product image'}
                                className="block h-[462px] w-auto rounded-3xl object-cover"
                                fill
                                quality={100}
                                src={item.image}
                                // style={{
                                //     objectFit: 'cover',
                                // }}
                            />
                            </div>
                            <h3 className="font-title text-xl font-bold">{item.title}</h3>
                            <p className="text-black">{item.description}</p>
                            </div> */}
                        <ProductCard item={item} />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className={clsx('mt-6 flex items-center justify-between')}>
                {/* <div className="flex gap-3">
                    {items.map((_, index) => (
                        <DotButton
                            className={cn(
                                'size-3 rounded-sm bg-foreground/20 transition',
                                index === selectedIndex && 'bg-primary'
                            )}
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                        />
                    ))}
                </div> */}

                {items.length > 3 && (
                    <div className="flex w-full justify-between">
                        <CarouselPrevious className="relative left-0 top-0 size-9 translate-x-0 translate-y-0" />
                        <CarouselNext className="relative left-0 top-0 size-9 translate-x-0 translate-y-0" />
                    </div>
                )}
            </div>
        </Carousel>
    );
};
