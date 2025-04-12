'use client';

import { PropsWithChildren, useEffect } from 'react';

import Lenis from 'lenis';

export const SmoothScroll = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        const lenis = new Lenis({
            anchors: {
                offset: 100,
                onComplete: () => {
                    console.log('scrolled to anchor');
                },
            },
        });

        function raf(time: number) {
            lenis.raf(time);

            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <>{children}</>;
};
