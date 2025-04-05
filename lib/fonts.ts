import { Inter, Raleway } from 'next/font/google';

export const mainFont = Inter({
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    subsets: ['latin', 'cyrillic-ext', 'cyrillic'],
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const titleFont = Raleway({
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
    subsets: ['latin', 'cyrillic-ext', 'cyrillic'],
    variable: '--font-raleway',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
