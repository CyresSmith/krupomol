'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        grecaptcha?: {
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
            ready: (cb: () => void) => void;
        };
    }
}

interface UseRecaptchaReturn {
    execute: (action: string) => Promise<null | string>;
    ready: boolean;
}

export const useRecaptcha = (): UseRecaptchaReturn => {
    const siteKey = process.env['NEXT_PUBLIC_RECAPTCHA_SITE_KEY'];
    const [loaded, setLoaded] = useState(false);
    const hasLoadedScript = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined' || hasLoadedScript.current || !siteKey) return;

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => setLoaded(true);
        document.body.appendChild(script);
        hasLoadedScript.current = true;
    }, [siteKey]);

    const execute = useCallback(
        async (action: string): Promise<null | string> => {
            if (!loaded || !window.grecaptcha || !siteKey) return null;

            return new Promise(resolve => {
                window?.grecaptcha?.ready(() => {
                    window?.grecaptcha
                        ?.execute(siteKey, { action })
                        .then(resolve)
                        .catch(() => resolve(null));
                });
            });
        },
        [loaded, siteKey]
    );

    return { execute, ready: loaded };
};
