<script>
	import profilePic from '$lib/assets/Profile Pic.jpeg';
	import profilePicDark from '$lib/assets/Profile Pic Dark.jpeg';
	import resume from '$lib/assets/Resume_Aug_10_Andi_Liu.pdf';
</script>

<svelte:head>
	<title>Andi Liu</title>
	<meta
		name="description"
		content="Hi! This is Andi Liu, a CS undergrad from MIT. You can check out my blogs and software projects here!"
	/>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-G035D2MZSG"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-G035D2MZSG');
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Andi Liu",
			"url": "https://andiliu.me",
			"image": "https://andiliu.me/app/immutable/assets/Profile%20Pic.49AGY8G_.jpeg",
			"sameAs": [
				"https://www.linkedin.com/in/andiliu/",
				"https://github.com/lad6558"
			],
			"jobTitle": "Computer Science Student",
			"alumniOf": "MIT",
			"homeLocation": {
				"@type": "Place",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Cambridge",
					"addressRegion": "MA"
				}
			},
			"email": "mailto:andiliu@mit.edu",
			"description": "Hi! This is Andi Liu, a CS undergrad from MIT. You can check out my blogs and software projects here!",
			"knowsAbout": ["Software Development", "AI", "Machine Learning", "Blogging", "Theater"],
			"subjectOf": {
				"@type": "CreativeWork",
				"name": "Resume",
				"url": "https://andiliu.me/app/immutable/assets/Resume_Aug_10_Andi_Liu.pdf"
			}
		}
	</script>
</svelte:head>

<div class="relative flex flex-col md:flex-row mx-auto space-x-0 md:space-x-8">
	<div class="flex items-center justify-center">
		<img class="h-80 w-64 dark:hidden" src={profilePic} alt="Andi" />
		<img class="h-80 w-64 hidden dark:block" src={profilePicDark} alt="Andi" />
	</div>

	<div class="mt-4 flex flex-col items-center justify-center md:w-[34rem] px-4">
		<p class="block dark:hidden">
			Hi! I am Andi Liu. I study Computer Science at MIT.
			<br />
			In my free time I enjoy blogging and building software.
		</p>
		<p class="hidden dark:block">
			Hi! I am Andi Liu, builder of software, master of the undead <sup
				class="inline tooltip"
				data-tip={'i.e. I own a pet skull named Yuri after Yorick from Hamlet'}
			>
				{1}
			</sup>.

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
				href="https://www.linkedin.com/in/andiliu/">LinkedIn</a
			>
		</p>
	</div>
</div>
