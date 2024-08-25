<script>
	export let data;
	const { slug, meta, Content } = data;

	import '$lib/styles/blog.scss';
	import '$lib/styles/prism.css';

	const baseUrl = 'https://andiliu.me';
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: meta.title,
		description: meta.description,
		datePublished: new Date(meta.date).toISOString(),
		url: `${baseUrl}/blogs/${slug}`,
		author: {
			'@type': 'Person',
			name: 'Andi Liu',
			url: baseUrl
		},
		image: `${baseUrl}${meta.image}` // Assuming `meta.image` contains a relative path to the image
	};
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<section class="max-w-prose w-full mb-12 mt-4 px-4">
	<h1 class="text-4xl font-bold mb-2">{meta.title}</h1>
	<p class="text-slate-500 dark:text-slate-400 mb-1">{meta.description}</p>
	<p class="text-slate-500 dark:text-slate-400 mb-8 text-sm">{meta.date}</p>

	<Content />
</section>
