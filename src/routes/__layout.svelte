<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import External from '$lib/icons/External.icon.svelte'
import Svelte from '$lib/icons/Svelte.icon.svelte'

  onMount(() => {
    // if ($theme === 'black') {
      document.querySelector('html')?.setAttribute('data-theme', 'dracula')
    // }
  })
</script>

<nav>
  <div class="container">
    <div class="hidden md:visible"><h1>Todd Christensen</h1></div>
    <div>
      <ul>
        <!-- {#if $page.path !== '/'} -->
          <li><a href="/"><span class="logo">todd_christensen</span></a></li>
        <!-- {/if} -->

        <li><a href="/writing">Writing</a></li>
        <li><a href="/reading">Reading</a></li>
        <li><a href="/reading">Bookmarks</a></li>
        <li><a class="flex flex-row items-center gap-2 normal-case" target="_blank" href="https://bytoddchristensen.com"><span class="text-base-content/70"><External /></span>byToddChristensen</a></li>
        <li><ToggleTheme /></li>
      </ul>
    </div>
  </div>
</nav>

<main>
  <slot />
</main>

<footer class="bg-base-200 flex items-center justify-center p-4 text-sm">Made with<a class="mx-1 text-[#ff3e00]" href="https://kit.svelte.dev/" target="_blank"> <Svelte /></a> in  🇵🇭  by a guy who is from a city near Cupertino, CA 🇺🇸.</footer>

<style lang="postcss">
  .container {
    @apply mt-6 flex flex-row items-center justify-between;
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
    @apply flex flex-row justify-around items-center list-none p-0 m-0 gap-8 font-semibold lowercase;
    a {
      @apply text-base-content;
    }
  }
</style>
