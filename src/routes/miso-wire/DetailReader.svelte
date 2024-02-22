<script>
	export let currentEvent;

	import { events } from './mockData';

	$: event = currentEvent !== null ? events[currentEvent] : null;
</script>

<div class="flex">
	{#if currentEvent === null}
		<div class="flex grow justify-center items-center text-2xl text-slate-400">
			<p class="text-center">Hover on events to see details</p>
		</div>
	{:else}
		<div class="flex flex-col">
			<div>
				<p class="text-2xl">{event.title}</p>
			</div>
		</div>
	{/if}
</div>
