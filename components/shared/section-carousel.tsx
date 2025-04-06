'use client';

import { useState } from 'react';

import { default as Image, StaticImageData } from 'next/image';

import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';

import { Card } from '@ui/card';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@ui/carousel';

import { DotButton, useDotButton } from '@components/main';

import { cn } from '@utils';

interface Props {
    items: StaticImageData[];
}

export const SectionCarousel = ({ items = [] }: Props) => {
    const [api, setApi] = useState<CarouselApi>();

    const { onDotButtonClick, selectedIndex } = useDotButton(api);

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
            setApi={setApi}
        >
            <div className="mt-12 overflow-hidden rounded-3xl">
                <CarouselContent>
                    {items.map((item, i) => (
                        <CarouselItem className="pb-3 tablet:basis-1/2 desktop:basis-1/3" key={i}>
                            <Card className="relative flex h-[400px] flex-col overflow-hidden rounded-3xl border-none shadow-lg transition group-hover:border-ring group-focus:border-ring">
                                <div
                                    className={clsx(
                                        'h-full w-full items-center justify-center bg-secondary p-4 transition'
                                    )}
                                >
                                    <Image
                                        alt={'title'}
                                        fill
                                        placeholder="blur"
                                        quality={100}
                                        src={item}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </div>

            <div className={clsx('mt-6 flex items-center justify-between')}>
                <div className="flex gap-3">
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
                </div>

                {items.length > 3 && (
                    <div className="flex gap-3">
                        <CarouselPrevious className="relative left-0 top-0 size-9 translate-x-0 translate-y-0" />
                        <CarouselNext className="relative left-0 top-0 size-9 translate-x-0 translate-y-0" />
                    </div>
                )}
            </div>
        </Carousel>
    );
};
