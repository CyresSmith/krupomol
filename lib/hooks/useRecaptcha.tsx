'use client';

import { useCallback } from 'react';

declare global {
    interface Window {
        grecaptcha?: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
            ready: (cb: () => void) => void;
        };
    }
}

export const useRecaptcha = () => {
    const execute = useCallback(async (action: string): Promise<null | string> => {
        const siteKey = process.env['NEXT_PUBLIC_RECAPTCHA_SITE_KEY'];

        if (typeof window === 'undefined' || !window.grecaptcha || !siteKey) return null;

        return new Promise(resolve => {
            window?.grecaptcha?.ready(() => {
                window?.grecaptcha
                    ?.execute(siteKey, { action })
                    .then(resolve)
                    .catch(() => resolve(null));
            });
        });
    }, []);

    return { execute };
};
