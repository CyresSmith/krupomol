'use client';

import { useEffect } from 'react';

import Lenis from 'lenis';

import { About, Advantages, Certification, Consultation, MainHero } from '@components/main';

export default function Home() {
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

    return (
        <>
            <MainHero />
            <About />
            <Certification />
            <Advantages />
            <Consultation />
        </>
    );
}
