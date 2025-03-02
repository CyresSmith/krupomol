'use client';

import { useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';

import { DotButton, useDotButton } from './dot-button';
import Slide from './slide';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@ui/carousel';

import cooperation from '@assets/images/cooperation.jpg';
import healthy from '@assets/images/healthy.jpg';
import quality from '@assets/images/quality.jpg';
import field from '@assets/images/sunset-field.jpg';
import withHands from '@assets/images/with-hands.jpg';

import { ABOUT_ROUTE, PRODUCTS_ROUTE } from '@routes';

import { cn } from '@utils';

const slides = [
    {
        desc: 'Ми підтримуємо місцевих фермерів і обираємо найкраще зерно, щоб ви отримували якісний і смачний продукт.',
        id: 'field',
        image: field,
        slug: PRODUCTS_ROUTE,
        title: 'Від українських полів – у ваш дім',
    },
    {
        desc: 'Ми контролюємо весь шлях крупи – від добірного зерна до вашого столу. Гарантія якості та свіжості без посередників!',
        id: 'withHands',
        image: withHands,
        slug: ABOUT_ROUTE,
        title: 'Від виробника до споживача',
    },
    {
        desc: 'Наші крупи – це 100% натуральний продукт без ГМО, консервантів та штучних добавок. Тільки природа та турбота!',
        id: 'healthy',
        image: healthy,
        slug: ABOUT_ROUTE,
        title: 'Натуральність у кожній зернинці',
    },
    {
        desc: 'Власне виробництво та суворий контроль на кожному етапі забезпечують стабільну якість і відповідність міжнародним стандартам.',
        id: 'quality',
        image: quality,
        slug: PRODUCTS_ROUTE,
        title: 'Якість, перевірена часом',
    },
    {
        desc: 'Ми зацікавлені у довгостроковій співпраці та надаємо підтримку клієнтам на всіх етапах — від першого замовлення до розвитку спільного бізнесу.',
        id: 'cooperation',
        image: cooperation,
        slug: PRODUCTS_ROUTE,
        title: 'Партнерство, що приносить прибуток',
    },
];

export const Hero = () => {
    const [api, setApi] = useState<CarouselApi>();

    const { onDotButtonClick, selectedIndex } = useDotButton(api);

    return (
        <section className="rounded-b-[theme(space.28)] bg-card">
            <div className="container relative pb-12">
                <Carousel
                    draggable={false}
                    opts={{
                        duration: 30,
                        loop: true,
                        watchDrag: true,
                        watchFocus: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    setApi={setApi}
                >
                    <CarouselContent>
                        {slides.map(slide => (
                            <CarouselItem key={slide.id}>
                                <Slide {...slide} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <div className="absolute bottom-6 left-1/2 z-20 mx-auto flex -translate-x-1/2 translate-y-1/2 transform gap-3">
                    {slides.map((_, index) => (
                        <DotButton
                            className={cn(
                                'size-2 rounded-full bg-foreground/20 transition',
                                index === selectedIndex && 'bg-primary'
                            )}
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
