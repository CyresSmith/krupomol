import type { MetadataRoute } from 'next';

const APP_HOST = process.env['NEXT_PUBLIC_APP_HOST'] ?? 'http://localhost:3000';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#FAFAFA',
        categories: ['business', 'food'],
        description: 'Крупомол - оптове постачання круп',
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
                label: 'Home screen showing main navigation and featured content',
                sizes: '1080x1920',
                src: '/screenshots/homepage.png',
                type: 'image/png',
            },
            {
                form_factor: 'wide',
                label: 'Products page screen showing featured content',
                sizes: '1080x1920',
                src: '/screenshots/products.png',
                type: 'image/png',
            },
            {
                form_factor: 'wide',
                label: 'Certification page screen showing featured content',
                sizes: '1080x1920',
                src: '/screenshots/certification.png',
                type: 'image/png',
            },
            {
                form_factor: 'wide',
                label: 'Prices page screen showing featured content',
                sizes: '1080x1920',
                src: '/screenshots/prices.png',
                type: 'image/png',
            },
            {
                form_factor: 'wide',
                label: 'Export page screen showing featured content',
                sizes: '1080x1920',
                src: '/screenshots/export.png',
                type: 'image/png',
            },
            {
                form_factor: 'wide',
                label: 'Contacts page screen showing featured content',
                sizes: '1080x1920',
                src: '/screenshots/contacts.png',
                type: 'image/png',
            },

            {
                form_factor: 'narrow',
                label: 'Home screen showing main navigation and featured content',
                sizes: '768x1024',
                src: '/screenshots/homepage-tablet.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Products page screen showing featured content',
                sizes: '768x1024',
                src: '/screenshots/products-tablet.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Certification page screen showing featured content',
                sizes: '768x1024',
                src: '/screenshots/certification-tablet.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Prices page screen showing featured content',
                sizes: '768x1024',
                src: '/screenshots/prices-tablet.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Export page screen showing featured content',
                sizes: '768x1024',
                src: '/screenshots/export-tablet.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Contacts page screen showing featured content',
                sizes: '768x1024',
                src: '/screenshots/contacts-tablet.png',
                type: 'image/png',
            },

            {
                form_factor: 'narrow',
                label: 'Home screen showing main navigation and featured content',
                sizes: '360x740',
                src: '/screenshots/homepage-mobile.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Products page screen showing featured content',
                sizes: '360x740',
                src: '/screenshots/products-mobile.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Certification page screen showing featured content',
                sizes: '360x740',
                src: '/screenshots/certification-mobile.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Prices page screen showing featured content',
                sizes: '360x740',
                src: '/screenshots/prices-mobile.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Export page screen showing featured content',
                sizes: '360x740',
                src: '/screenshots/export-mobile.png',
                type: 'image/png',
            },
            {
                form_factor: 'narrow',
                label: 'Contacts page screen showing featured content',
                sizes: '360x740',
                src: '/screenshots/contacts-mobile.png',
                type: 'image/png',
            },
        ],
        short_name: 'Krpml',
        start_url: APP_HOST,
        theme_color: '#266EF2',
    };
}
