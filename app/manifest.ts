import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#fbf8ea',
        categories: ['business', 'food'],
        description: 'Крупомол - магазин круп',
        display: 'standalone',
        icons: [
            {
                purpose: 'maskable',
                sizes: '192x192',
                src: '/icon-192x192.png',
                type: 'image/png',
            },
            {
                purpose: 'maskable',
                sizes: '512x512',
                src: '/icon-512x512.png',
                type: 'image/png',
            },
        ],
        name: 'Krupomol',
        screenshots: [
            {
                form_factor: 'wide',
                sizes: '1280x720',
                src: 'screens/screen1.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                sizes: '430x932',
                src: 'screens/screen2.png',
                type: 'image/png',
            },
        ],
        short_name: 'Krpml',
        start_url: '/',
        theme_color: '#224077',
    };
}
