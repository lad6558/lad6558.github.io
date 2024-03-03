<script>
	export let event;
	import location from '$lib/assets/location.svg';
</script>

<div class="flex">
	<img class="w-3" src={location} alt="" />
	<div>&nbsp; {event.location}</div>
</div>
