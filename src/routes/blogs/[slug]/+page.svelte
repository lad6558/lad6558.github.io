<script>
	export let data;
	const { meta, Content } = data;

	import '$lib/styles/blog.css';
	import '$lib/styles/prism.css';
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<section class="max-w-prose w-full mb-12 mt-4 px-4">
	<h1 class="text-4xl font-bold mb-2">{meta.title}</h1>
	<p class="text-slate-500 dark:text-slate-400 mb-1">{meta.description}</p>
	<p class="text-slate-500 dark:text-slate-400 mb-8 text-sm">{meta.date}</p>

	<Content />
</section>
