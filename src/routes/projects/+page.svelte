<script>
	const projects = [
		{
			name: 'DormSoup',
			description: 'The ChatGPT-powered Campus Event Website.',
			url: 'https://andiliu.me/blogs/dormsoup',
			type: 'CreativeWork'
		},
		{
			name: 'TimeTrace',
			description:
				'A Chrome extension that augments your browser history page with a clean timeline view and a powerful search bar.',
			url: 'https://chromewebstore.google.com/detail/timetrace/kmnfpbhpiadgjmbhajleoghenphldppi',
			type: 'SoftwareApplication',
			details: {
				operatingSystem: 'Google Chrome',
				applicationCategory: 'BrowserApplication',
				aggregateRating: {
					ratingValue: '5.0',
					reviewCount: '2'
				},
				offers: {
					price: '0.00',
					priceCurrency: 'USD'
				},
				datePublished: '2024-07-23',
				downloadUrl:
					'https://chrome.google.com/webstore/detail/timetrace/kmnfpbhpiadgjmbhajleoghenphldppi'
			}
		},
		{
			name: 'Miso the Mail Sorter',
			description: 'A wireframe for Miso, the email sorting assistant.',
			url: 'https://andiliu.me/projects/miso-wire',
			type: 'CreativeWork'
		}
	];

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: "Andi Liu's Projects",
		description: "A sneak peak at Andi Liu's latest software projects!",
		itemListElement: projects.map((project, index) => {
			if (project.type === 'SoftwareApplication' && project.name === 'TimeTrace') {
				return {
					'@type': 'SoftwareApplication',
					position: index + 1,
					name: project.name,
					description: project.description,
					url: project.url,
					operatingSystem: project.details.operatingSystem,
					applicationCategory: project.details.applicationCategory,
					aggregateRating: {
						'@type': 'AggregateRating',
						ratingValue: project.details.aggregateRating.ratingValue,
						reviewCount: project.details.aggregateRating.reviewCount
					},
					offers: {
						'@type': 'Offer',
						price: project.details.offers.price,
						priceCurrency: project.details.offers.priceCurrency
					},
					datePublished: project.details.datePublished,
					downloadUrl: project.details.downloadUrl
				};
			} else {
				return {
					'@type': project.type,
					position: index + 1,
					name: project.name,
					description: project.description,
					url: project.url
				};
			}
		})
	};
</script>

<svelte:head>
	<title>Andi's Projects</title>
	<meta name="description" content="A sneak peak at Andi Liu's latest software projects!" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<ul class="list-disc pl-8 max-w-prose">
	<p>Some personal projects I have been working on:</p>
	{#each projects as project}
		<li>
			<a href={project.url} class="underline hover:text-blue-500">{project.name}</a>
			- {project.description}
		</li>
	{/each}
</ul>
