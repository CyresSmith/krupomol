'use client';

import { useCallback } from 'react';

declare global {
    interface Window {
        grecaptcha?: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
            ready: () => Promise<void>;
        };
    }
}

export const useRecaptcha = () => {
    const execute = useCallback(async (action: string): Promise<null | string> => {
        if (typeof window === 'undefined' || !window.grecaptcha) return null;

        await window.grecaptcha.ready();

        const siteKey = process.env['NEXT_PUBLIC_RECAPTCHA_SITE_KEY'];

        if (!siteKey) {
            console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined');
            return null;
        }

        return await window.grecaptcha.execute(siteKey, {
            action,
        });
    }, []);

    return { execute };
};
