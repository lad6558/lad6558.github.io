<script>
	export let event;

	import clock from '$lib/assets/clock.svg';
</script>

<div class="flex">
	<img class="w-3" src={clock} alt="" />
	<div>&nbsp; {event.time}, {event.date}</div>
</div>
