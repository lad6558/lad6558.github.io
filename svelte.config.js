import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkBreaks from 'remark-breaks';
import remarkSectionize from 'remark-sectionize';
import remarkGithub from 'remark-github';
import { visit } from 'unist-util-visit';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [
		[
			// Custom rehype plugin to handle data-sveltekit-reload
			function rehypeSvelteKitReload() {
				return function transformer(tree) {
					visit(tree, 'element', (node) => {
						if (node.tagName === 'a' && node.properties.href?.startsWith('/blogs/')) {
							node.properties['data-sveltekit-reload'] = '';
						}
					});
				};
			}
		]
	],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter(),
	},
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
}
	;

export default config;
