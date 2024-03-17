<script>
	import DetailReader from './DetailReader.svelte';
	import Thumbnails from './Thumbnails.svelte';
	import Settings from './Settings.svelte';

	let currentEvent = null;

	function handleEventHover(event) {
		currentEvent = event.detail.eventid;
	}

	function handleEventUnhover(event) {
		// currentEvent = null;
	}
</script>

<div class="bg-slate-800 h-screen flex justify-center items-center text-black w-full">
	<!-- Miso main window -->
	<div class="bg-slate-100 w-3/4 h-3/4 rounded-md flex flex-row shadow-2xl my-30 mx-12">
		<Settings />
		<div class="border border-slate-300" />
		<Thumbnails on:eventhover={handleEventHover} on:eventunhover={handleEventUnhover} />
		<div class="border border-slate-300" />
		<DetailReader {currentEvent} />
	</div>
</div>
