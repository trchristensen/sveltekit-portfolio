<script>
  import Pin from './Pin.icon.svelte'
  export let href = '#'
  export let title
  export let description
  export let tags = []
</script>

<a
  {href}
  class="card normal-case w-full h-full group flex flex-col justify-between mx-auto rounded-lg p-6 bg-base-300 text-base-content ring-1 ring-accent/5 shadow-lg space-y-3 hover:bg-accent hover:ring-accent hover:no-underline"
>
<div class="card-body p-0">
  <div class="flex items-center space-x-2 group-hover:text-primary-content">
    <Pin style={'h-3 w-3'} />
    <h3 class="text-base-content text-sm font-semibold group-hover:text-primary-content">
      {title}
    </h3>
  </div>
  <div class="text-left w-full">
    <p
      class="text-base-content/75 group-hover:text-primary-content text-sm font-normal line-clamp-2"
    >
      {description}
    </p>
  </div>
  </div>
  <div>
    {#if tags}
      <div class="flex flex-row flex-wrap gap-1 w-full">
        {#each tags as tag}
          <span class="badge badge-ghost text-base-content/60 badge-xs text-xs">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </div></a
>
