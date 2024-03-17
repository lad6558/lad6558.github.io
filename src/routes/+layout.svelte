<script>
	import '../app.css';
	import { fade } from 'svelte/transition';

	function toggleDarkMode() {
		document.querySelector('html').classList.toggle('dark');
	}
</script>

<div
	class="bg-white text-black dark:bg-slate-800 dark:text-slate-300 min-h-screen transition-all duration-300"
>
	<nav class="flex flex-row pt-4 font-semibold text-lg">
		<div class="flex flex-row space-x-8">
			<a href="/"> Home </a>
			<a href="/blogs"> Blogs </a>
			<a href="/projects"> Projects </a>
		</div>
		<div>
			<button on:click={toggleDarkMode}>
				<!-- By importing svg directly, enable inheritance of text color -->
				<svg
					transition:fade
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-sun block dark:hidden"
					><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
						d="m4.93 4.93 1.41 1.41"
					/><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path
						d="m6.34 17.66-1.41 1.41"
					/><path d="m19.07 4.93-1.41 1.41" /></svg
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-moon hidden dark:block"
					><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
				>
				<!-- <img class="block dark:hidden fill-white text-red-500" src={sun} alt="toggle dark mode" />
				<img class="hidden dark:block" src={moon} alt="toggle dark mode" /> -->
			</button>
		</div>
	</nav>
	<div class="divider"></div>
	<main class="flex">
		<slot />
	</main>
</div>
