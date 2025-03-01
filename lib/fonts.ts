import { Overpass } from 'next/font/google';

export const mainFont = Overpass({
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    subsets: ['latin', 'cyrillic-ext', 'cyrillic'],
    variable: '--font-overpass',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
