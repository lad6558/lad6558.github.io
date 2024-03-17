<script>
	import profilePic from '$lib/assets/Profile Pic.png';
	import profilePicDark from '$lib/assets/Profile Pic Dark.jpeg';
	import resume from '$lib/assets/Andi_Resume_Jan_25.pdf';
</script>

<svelte:head>
	<title>Andi Liu</title>
	<meta name="description" content="Hi! This is Andi Liu, a CS undergrad from MIT" />
</svelte:head>

<div class="relative flex flex-col sm:flex-row">
	<div>
		<div class="text-4xl mt-4 ml-2 font-medium">Andi Liu 刘安迪</div>
		<p class="mt-4 block dark:hidden">
			Hi! I am Andi Liu. I study at MIT, majoring in Computer Science.
			<br />
			In my free time I enjoy blogging and building software.
		</p>
		<p class="mt-4 hidden dark:block">
			Hi! I am Andi Liu. I study at MIT, majoring in Computer Science.
			<br />
			In my free time I enjoy writing and doing theater.
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
		<img class="h-80 w-64 dark:hidden" src={profilePic} alt="Andi" />
		<img class="h-80 w-64 hidden dark:block" src={profilePicDark} alt="Andi" />
	</div>
</div>
