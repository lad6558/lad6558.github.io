<script>
	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>Andi's Blogs</title>
	<meta name="description" content="Read Andi Liu's latest blogs!" />
</svelte:head>

<section>
	I have not uploaded blogs yet. Come back later?
	<!-- <ul>
		{#each data.blogs as blog}
			<li>
				<a href="/blogs/{blog.slug}">{blog.title}</a>
			</li>
		{/each}
	</ul> -->
</section>
