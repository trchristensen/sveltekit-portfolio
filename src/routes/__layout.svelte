<script lang="ts">
	import '../global.postcss';
	import { theme } from './store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import ToggleTheme from '$lib/ToggleTheme.svelte';
	import External from '$lib/icons/External.icon.svelte';
	import Svelte from '$lib/icons/Svelte.icon.svelte';

	onMount(() => {
		// if ($theme === 'black') {
		document.querySelector('html')?.setAttribute('data-theme', 'dracula');
		// }

		console.log($page);
	});
</script>

<nav>
	<div class="container">
		<div class="hidden md:visible"><h1>Todd Christensen</h1></div>
		<div>
			<ul>
				{#if $page.url.pathname !== '/'}
					<li><a href="/"><span class="logo">todd_christensen</span></a></li>
				{/if}

				<li><a href="/writing">Writing</a></li>
				<li><a href="/reading">Reading</a></li>
				<li><a href="/reading">Bookmarks</a></li>
				<li>
					<a
						class="flex flex-row items-center gap-2 normal-case"
						target="_blank"
						href="https://bytoddchristensen.com"
						><span class="text-base-content/70"><External /></span>byToddChristensen</a
					>
				</li>
				<li><ToggleTheme /></li>
			</ul>
		</div>
	</div>
</nav>
<div class="container m-0">
	<div class="alert alert-warning shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Warning: This site is not yet functional. It should be done by the end of July 2022. Go to <a class="underline" href="https://bytoddchristensen.com">ByToddChristensen</a> to view my older site.</span>
  </div>
</div>
</div>
<main>
	<slot />
</main>

<footer class="bg-base-200 flex items-center justify-center p-4 text-sm">
	Made with<a class="mx-1 text-[#ff3e00]" href="https://kit.svelte.dev/" target="_blank">
		<Svelte /></a
	> in 🇵🇭 by a guy who is from a city near Cupertino, CA 🇺🇸.
</footer>

<style lang="postcss">
	.container {
		@apply flex flex-row items-center justify-between pt-4;
	}
	h1 {
		@apply hidden;
	}
	a {
		@apply hover:text-accent-focus hover:underline;
	}
	.logo {
		@apply font-bold;
	}
	nav ul {
		@apply flex flex-row justify-around items-center list-none p-0 m-0 gap-4 sm:gap-8 font-semibold lowercase text-xs md:text-sm  md:text-base;
		a {
			@apply text-base-content;
		}
	}
</style>
