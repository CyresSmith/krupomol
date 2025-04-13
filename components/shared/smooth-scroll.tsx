'use client';

import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import Lenis from 'lenis';

export const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: PropsWithChildren) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            anchors: true,
            duration: 2.5,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        setLenis(lenis);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};
