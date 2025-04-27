import type { MetadataRoute } from 'next';

const APP_HOST = process.env['NEXT_PUBLIC_APP_HOST'] ?? 'http://localhost:3000';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#FAFAFA',
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
                sizes: '1920x1080',
                src: 'screens/screen-wide.png',
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
        start_url: APP_HOST,
        theme_color: '#266EF2',
    };
}
