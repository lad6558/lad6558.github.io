<script>
	export let data;
</script>

<svelte:head>
	<title>Andi's Blogs</title>
	<meta name="description" content="Read Andi Liu's latest blogs!" />
</svelte:head>

<section>
	<ul class="flex flex-col space-y-4">
		{#each data.blogs as blog}
			{#if blog.published}
				<li>
					<div class="border-2 w-96 px-4 py-2 shadow-xl">
						<h2 class="font-bold text-lg underline">
							<a href="/blogs/{blog.slug}">
								{blog.title}
							</a>
						</h2>
						<p class="text-sm">{blog.description}</p>
						<p class="text-xs text-slate-400 mt-2">
							{blog.date}
						</p>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</section>
