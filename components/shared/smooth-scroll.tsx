'use client';

import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import Lenis from 'lenis';

export const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: PropsWithChildren) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const params = useParams();

    useEffect(() => {
        const l = new Lenis({
            anchors: false,
            duration: 1.5,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            prevent: node => node.id === 'modal',
        });

        setLenis(l);

        function raf(time: number) {
            l.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    useEffect(() => {
        const scrollToHash = () => {
            if (!lenis) return;
            if (!window.location.hash) return;

            const id = window.location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) lenis.scrollTo(el);
        };

        scrollToHash();

        window.addEventListener('hashchange', scrollToHash);
        return () => window.removeEventListener('hashchange', scrollToHash);
    }, [lenis, params]);

    return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};
