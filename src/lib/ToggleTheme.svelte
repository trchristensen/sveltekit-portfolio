<script lang="ts">
  import { theme } from '../routes/store'
  import Bulb from './icons/Bulb.icon.svelte'
  import BulbOutline from './icons/BulbOutline.icon.svelte'

  const toggleTheme = () => {
    $theme = $theme === 'black' ? 'light' : 'black'

    document.querySelector('html').setAttribute('data-theme', $theme)
  }
</script>

<button class="flex items-center justify-center text-xl" on:click={toggleTheme}>
  {#if $theme == 'black'} <BulbOutline /> {:else} <Bulb /> {/if}
</button>
