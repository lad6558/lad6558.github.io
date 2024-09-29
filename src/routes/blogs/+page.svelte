<script>
	import { formatISO } from 'date-fns';

	export let data;

	const baseUrl = 'https://andiliu.me';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		headline: "Andi Liu's Blog",
		author: {
			'@type': 'Person',
			name: 'Andi Liu',
			url: baseUrl
		},
		url: `${baseUrl}/blogs`,
		blogPost: data.blogs
			.filter((blog) => blog.published)
			.map((blog) => ({
				'@type': 'BlogPosting',
				headline: blog.title,
				url: `${baseUrl}/blogs/${blog.slug}`,
				datePublished: formatISO(new Date(blog.date)),
				description: blog.description,
				author: {
					'@type': 'Person',
					name: 'Andi Liu',
					url: baseUrl
				},
				image: `${baseUrl}${blog.image}`
			}))
	};
</script>

<svelte:head>
	<title>Andi's Blogs</title>
	<meta name="description" content="Read Andi Liu's latest blogs about Tech, Life, and People" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<section>
	<ul class="space-y-6 px-6">
		{#each data.blogs as blog}
			{#if blog.published}
				<li class="cursor-pointer">
					<a
						href="/blogs/{blog.slug}"
						class="block transition hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-lg shadow-lg border-2"
					>
						<div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
							<img
								src={blog.image}
								alt={blog.title}
								class="w-full md:w-48 h-32 object-cover rounded-lg md:mr-4"
							/>
							<div class="flex-1 flex flex-col justify-between">
								<div>
									<h2 class="font-bold text-xl text-gray-800 dark:text-slate-200">{blog.title}</h2>
									<p class="text-sm text-gray-600 dark:text-slate-400 mt-2">{blog.description}</p>
								</div>
								<p class="text-xs text-gray-500 dark:text-slate-500 mt-2">{blog.date}</p>
							</div>
						</div>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</section>
