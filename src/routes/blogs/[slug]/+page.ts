import type { Blog } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../blogs/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, 'Post not found');
	}
}
