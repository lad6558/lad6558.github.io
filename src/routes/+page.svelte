<script>
	import profilePic from '$lib/assets/Profile Pic.png';
	import profilePicDark from '$lib/assets/Profile Pic Dark.jpeg';
	import resume from '$lib/assets/Andi_Resume_Jan_25.pdf';
</script>

<svelte:head>
	<title>Andi Liu</title>
	<meta name="description" content="Hi! This is Andi Liu, a CS undergrad from MIT" />
</svelte:head>

<div class="relative flex flex-col md:flex-row mx-auto space-x-0 md:space-x-8">
	<div class="flex items-center justify-center">
		<img class="h-80 w-64 dark:hidden" src={profilePic} alt="Andi" />
		<img class="h-80 w-64 hidden dark:block" src={profilePicDark} alt="Andi" />
	</div>

	<div class="mt-4 flex flex-col items-center justify-center md:w-[34rem] px-8">
		<!-- <div class="text-4xl mt-4 ml-2 font-medium">Andi Liu 刘安迪</div> -->
		<p class="block dark:hidden">
			Hi! I am Andi Liu. I study at MIT, majoring in Computer Science.
			<br />
			In my free time I enjoy blogging and building software.
		</p>
		<p class="hidden dark:block">
			Hi! I am Andi Liu, builder of software, master of the undead. (i.e. I own a pet skull named
			Yuri after Yorick from Hamlet)
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
</div>
