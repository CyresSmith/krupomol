'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { buttonVariants } from '@ui/button';

import { cn } from '@utils';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 });

        // document.documentElement.scrollTo({
        //     behavior: 'smooth',
        //     top: 0,
        // });
    };

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

    // return (
    //     <a
    //         aria-label="Scroll to top"
    //         className={cn(
    //             buttonVariants({ size: 'icon' }),
    //             'fixed -bottom-full right-4',
    //             isVisible && 'bottom-4'
    //         )}
    //         href={'#top'}
    //         title="Scroll to top"
    //     >
    //         <ArrowUp aria-hidden="true" />
    //     </a>
    // );
};
