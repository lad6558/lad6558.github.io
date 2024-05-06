<script>
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<section>
	<svelte:component this={data.content}></svelte:component>
</section>
