<script>
	export let currentEvent;

	import { events } from './mockData';
	import Time from './Time.svelte';
	import Location from './Location.svelte';

	$: event = currentEvent !== null ? events[currentEvent] : null;
</script>

<div class="flex grow">
	{#if currentEvent === null}
		<div class="flex grow justify-center items-center text-2xl text-slate-400">
			<div class="text-center">Hover on events to see details</div>
		</div>
	{:else}
		<div class="flex flex-col py-4">
			<div class="px-4 pb-2">
				<p class="font-semibold">{event.title}</p>
				<div class="flex text-xs pt-0.5">
					<div class="w-40"><Time {event} /></div>
					<div>
						<Location {event} />
					</div>
				</div>
			</div>
			<div class="border border-slate-300 mx-1" />
			<div class="overflow-auto px-4 py-2 text-sm">
				{@html event.text}
			</div>
		</div>
	{/if}
</div>
