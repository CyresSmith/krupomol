import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            alternates: {
                languages: {
                    en: 'https://krupomol.vercel.app/en',
                    uk: 'https://krupomol.vercel.app/',
                },
            },
            changeFrequency: 'yearly',
            lastModified: new Date(),
            priority: 1,
            url: 'https://krupomol.vercel.app/',
        },
    ];
}
