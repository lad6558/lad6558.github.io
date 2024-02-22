<script>
	export let event, eventid;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleMouseEnter() {
		dispatch('eventhover', {
			eventid
		});
	}

	function handleMouseLeave() {
		dispatch('eventunhover', {
			eventid
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex flex-row justify-between h-16 px-2 pt-2"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div class="flex flex-col">
		<div class="font-semibold text-sm line-clamp-1 mb-0.5">{event.title}</div>
		<div class="flex text-xs">
			<div>{event.time}, {event.date}</div>
		</div>
		<div class="text-xs">{event.location}</div>
	</div>
	<div class="flex flex-col items-center justify-center">
		<input type="checkbox" class="checkbox checkbox-primary" checked={event.interested} />
	</div>
</div>
