'use client';

import { ArrowUp } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';

import { LenisContext } from './smooth-scroll';

import { buttonVariants } from '@ui/button';

import { cn } from '@utils';

export const ScrollToTop = () => {
    const lenis = useContext(LenisContext);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => lenis?.scrollTo('top');

    return (
        <button
            aria-label="Scroll to top"
            className={cn(
                buttonVariants({ size: 'icon', variant: 'primary' }),
                'fixed -bottom-full right-4',
                isVisible && 'bottom-4'
            )}
            onClick={scrollToTop}
            title="Scroll to top"
        >
            <ArrowUp aria-hidden="true" />
        </button>
    );
};
