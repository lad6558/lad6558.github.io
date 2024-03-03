<script>
	import '../app.css';
</script>

<nav class="flex flex-row space-x-8 pt-4 font-semibold text-lg pl-16">
	<a href="/"> Home </a>
	<a href="/blogs"> Blogs </a>
	<a href="/projects"> Projects </a>
</nav>
<div class="divider"></div>
<main class="flex px-8 md:px-16">
	<slot />
</main>
