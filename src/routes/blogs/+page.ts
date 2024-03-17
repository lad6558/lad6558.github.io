import type { Blog } from '$lib/types.js';

export async function load({ fetch }) {
	const res = await fetch('/api/blogs');
	const blogs: Blog[] = await res.json();
	return {
		blogs
	};
}
