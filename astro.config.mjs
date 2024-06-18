import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/docs': '/docs/intro',
    },
    markdown: {
        rehypePlugins: [
            () => (tree, file) => {
                rehypeHeadingIds()(tree, file);
                for (var c of tree.children) {
                    if (c.type === 'element' && /h[1-6]/.test(c.tagName)) {
                        c.children.unshift({
                            type: 'element',
                            tagName: 'a',
                            properties: {
                                href: '#' + c.properties.id,
                                class: 'anchor',
                                'aria-hidden': 'true',
                            },
                            children: [
                                {
                                    type: 'text',
                                    value: '#',
                                },
                            ],
                        });
                    }
                }
            }
        ]
    }
});