// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    security: { csp: true },
    integrations: [mdx(), icon(), sitemap()],
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                jpeg: { mozjpeg: true },
                webp: { effort: 6, alphaQuality: 80 },
                avif: { effort: 4, chromaSubsampling: '4:2:0' },
                png: { compressionLevel: 9 },
            },
        },
    },
});