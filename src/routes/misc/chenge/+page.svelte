<script>
	import lineDog from '$lib/assets/Line Dog.gif';
	import { Confetti } from 'svelte-confetti';

	let showClickConfetti = false;
	let clickConfetti = [];
	let timeout;
	const duration = 2000;

	function spawnConfetti(event) {
		const { clientX, clientY } = event;
		clickConfetti = [...clickConfetti, { x: clientX, y: clientY }];

		clearTimeout(timeout);
		timeout = setTimeout(() => (clickConfetti = []), duration);
	}
</script>

<!-- Fullscreen confetti container -->
<div
	style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"
>
	<!-- Main confetti stream -->
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[0, 2000]}
		infinite
		duration={10000}
		amount={800}
		size="15"
		fallDistance="100vh"
		colorArray={['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FF4500']}
	/>
	<Confetti
		x={[2, 7]}
		y={[0, 0.1]}
		delay={[250, 2250]}
		infinite
		duration={4800}
		amount={200}
		fallDistance="100vh"
		colorArray={['#FFD700', '#FFA500', '#FF69B4']}
	/>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex flex-col max-w-sm md:max-w-xl px-6 py-12 space-y-4 ring-2 ring-yellow-300"
	on:click={spawnConfetti}
>
	<h2 class="text-2xl font-bold">我亲爱的晨歌，</h2>
	<p class="text-lg">生日快乐！</p>
	<p class="text-lg">
		这个域名（chengeliu.com）是我给你的生日礼物。等到你要做个人网站的时候，我就把这个域名转让给你。
	</p>
	<p class="text-lg">
		“我想一定要送一个你之后每天都需要，常常会看到的东西，这样你每次看到它，拿出它，都会想起我了。”
	</p>
	<img src={lineDog} alt="line dog" class="w-1/2" />

	<p class="text-xl font-bold w-full text-right">刘安迪</p>
	<p class="w-full text-right">2024年11月24日</p>

	{#each clickConfetti as conf}
		<div style="position: fixed; left: {conf.x}px; top: {conf.y}px; pointer-events: none;">
			<Confetti
				x={[-1.5, 1.5]}
				y={[-1, 1]}
				fallDistance="100px"
				amount={200}
				{duration}
				colorArray={['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FF4500']}
			/>
		</div>
	{/each}
</div>
