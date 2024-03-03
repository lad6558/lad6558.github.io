<script>
	import profilePic from '$lib/assets/Profile Pic.png';
	import resume from '$lib/assets/Andi_Resume_Aug_11.pdf';
</script>

<svelte:head>
	<title>Andi Liu</title>
	<meta name="description" content="Hi! This is Andi Liu, a CS undergrad from MIT" />
</svelte:head>

<div class="relative flex flex-col sm:flex-row">
	<div>
		<div class="text-5xl mt-4 ml-2">Andi Liu 刘安迪</div>
		<p class="mt-4">
			Hi! I am Andi Liu. I study at MIT, majoring in Computer Science.
			<br />
			In my free time I enjoy blogging and building software.
		</p>
		<p class="text-center mt-2">
			<a
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				href="mailto:andiliu@mit.edu">Email</a
			>
			/
			<a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={resume}
				>Resume</a
			>
			/
			<a
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				href="https://github.com/lad6558">GitHub</a
			>
			/
			<a
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				href="https://www.linkedin.com/in/andi-liu/">LinkedIn</a
			>
			<!-- <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="random/page-test">LinkedIn</a> -->
		</p>
	</div>

	<div class="ml-8">
		<img class="max-w-full h-auto" src={profilePic} alt="Andi" />
	</div>
</div>
