<script>
	import Thumbnail from './Thumbnail.svelte';

	import { events } from './mockData.js';
</script>

<div class="min-w-1/3 w-1/3 flex flex-col justify-between bg-slate-100">
	<div>
		{#each events as event, i}
			<Thumbnail {event} eventid={i} on:eventhover on:eventunhover />
			<div class="border border-slate-400"></div>
		{/each}
	</div>
	<button class="btn btn-success m-2">Done! Add to Calendar</button>
</div>
