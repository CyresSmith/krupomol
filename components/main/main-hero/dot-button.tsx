'use client';

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react';

import { EmblaCarouselType } from 'embla-carousel';

interface UseDotButtonType {
    onDotButtonClick: (index: number) => void;
    scrollSnaps: number[];
    selectedIndex: number;
}

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        onDotButtonClick,
        scrollSnaps,
        selectedIndex,
    };
};

type PropType = ComponentPropsWithRef<'button'>;

export const DotButton: React.FC<PropType> = props => {
    const { children, ...restProps } = props;

    return (
        <button type="button" {...restProps}>
            {children}
        </button>
    );
};
