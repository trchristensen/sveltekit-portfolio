<script lang="ts">
  import Csv from '$lib/icons/Csv.icon.svelte'

  import { PROJECTS } from './store'
  import Github from '$lib/icons/Github.icon.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.icon.svelte'
  import Location from '$lib/icons/Location.icon.svelte'
  import Twitter from '$lib/icons/Twitter.icon.svelte'
  import ProjectCard from '$lib/ProjectCard.svelte'
  import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image'
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Tailwind 2</title>
  <meta name="title" content="SvelteKit ❤️ Tailwind 2" />
  <meta name="description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta property="og:description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta property="og:image" content="https://sveltekit-tailwind2.netlify.app/screenshot.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    property="twitter:description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta property="twitter:image" content="https://sveltekit-tailwind2.netlify.app/screenshot.png" />
</svelte:head>

<!-- Hero -->

<section id="IntroSection">
  <div class="container flex flex-col-reverse sm:flex-row items-start">
    <div class="flex flex-col pr-8">
      <span class="font-bold text-3xl md:text-5xl tracking-tight mb-1"> Todd Christensen </span>
      <div class="flex flex-row items-center mb-4">
        <h2 class="font-semibold text-base-content/75">Web Developer</h2>
        <span class="flex items-center text-sm font-semibold text-base-content/60"
          ><span class="inline-block mx-2">/</span><span
            class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"
          />Open to job offers</span
        >
      </div>
      <div id="intro-links" class="mb-4">
        <ul class="flex flex-row gap-4 text-xl text-base-content/70">
          <li>
            <a class="text-base-content/70 hover:text-accent-focus" href="#"><Github /></a>
          </li>
          <li>
            <a class="text-base-content/70 hover:text-accent-focus" href="#"><LinkedIn /></a>
          </li>
          <li>
            <a class="text-base-content/70 hover:text-accent-focus" href="#"><Twitter /></a>
          </li>
          <li>
            <a class="text-base-content/70 hover:text-accent-focus" href="#"><Csv /></a>
          </li>
        </ul>
      </div>

      <div class="mb-10">
        <p>
          Hey, I'm Todd. I am a caucasian, 30-something, cisgender male, currently residing in the
          Philippines with my newly created family. I have been freelancing work the past few years
          and focusing on my own projects. However, I'm open to job offers.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="avatar">
        <div class="w-[100px] sm:w-[200px] relative mb-8 sm:mb-0 mr-auto rounded-full">
          <img
            src="https://res.cloudinary.com/christyvault/image/upload/e_pixelate:5,q_auto:low/v1657604289/todd_christensen/family-avatar-c_fq5ktq.webp"
            data-src="https://res.cloudinary.com/christyvault/image/upload/v1657604289/todd_christensen/family-avatar-c_fq5ktq.webp"
            alt="me and my family. im on the right"
            use:lazyImage={{ threshold: 0.5 }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section id="where">
  <div class="container">
    <div class="mb-4">
      <h3 class="text-2xl font-bold mb-4">Where I'm @</h3>
      <p class="text-base-content/75">
        California native, currently residing in the Philippines<span class="ml-1 text-base-content"
          >🇵🇭</span
        >.
      </p>
    </div>
    <div />

    <div class="flex flex-col sm:flex-row gap-2">
      <div class="sm:w-1/2 rounded-xl overflow-hidden shadow-xl image-full max-w-3xl flex flex-row">
      <figure>
        <img
          class="object-cover"
          use:lazyImage={{ threshold: 0.5 }}
          alt="i reside in Angeles City, Philippines"
          data-src="https://res.cloudinary.com/christyvault/image/upload/v1657630803/todd_christensen/map-square_ma3hxb.webp"
          src="https://res.cloudinary.com/christyvault/image/upload/e_pixelate:20,q_10/v1657630803/todd_christensen/map-square_ma3hxb.webp"
        />
      </figure>
    </div>
    <div class="sm:w-1/2 rounded-xl overflow-hidden shadow-xl image-full max-w-3xl flex flex-row">
      <figure>
        <img
          class="object-cover"
          use:lazyImage={{ threshold: 0.5 }}
          alt="i reside in Angeles City, Philippines"
          data-src="https://res.cloudinary.com/christyvault/image/upload/v1657630878/todd_christensen/map-square_ylvprg.webp"
          src="https://res.cloudinary.com/christyvault/image/upload/e_pixelate:20,q_10/v1657630878/todd_christensen/map-square_ylvprg.webp"
        />
      </figure>
    </div>
    </div>
    <a target="_blank" href="https://goo.gl/maps/NjmJDs1DJbourXqBA"
      ><span
        class="w-full mt-2 text-xs flex flex-row gap-1 items-center justify-end text-base-content/75 hover:text-accent-focus"
        ><Location />Angeles City, Pampanga, Philippines</span
      ></a
    >
  </div>
</section>

<!-- work section -->
<section id="work">
  <div class="container">
    <h3 class="text-2xl font-bold mb-4">Jobs</h3>
    <div class="flex flex-col md:space-y-3 text-sm md:text-md">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://bytoddchristensen.com"
        class="flex items-center space-x-4 group"
        ><span class="flex-none font-medium group-hover:underline">byToddChristensen</span><span
          class="flex-shrink w-full border-t border-base-content border-dashed"
        /><span class="flex-none ">Web Developer</span><span class="flex-none font-mono "
          >2018-</span
        ></a
      ><a
        target="_blank"
        rel="noopener noreferrer"
        href="https://designstudio.com"
        class="flex items-center space-x-4 group"
        ><span class="flex-none font-medium group-hover:underline">DesignStudio</span><span
          class="flex-shrink w-full border-t border-base-content border-dashed"
        /><span class="flex-none ">Web Developer</span><span class="flex-none font-mono"
          >2015-2018</span
        ></a
      ><a
        target="_blank"
        rel="noopener noreferrer"
        href="https://myspace.com"
        class="flex items-center space-x-4 group text-base-content/60"
        ><span class="flex-none font-medium group-hover:underline">Myspace</span><span
          class="flex-shrink w-full border-t border-base-content border-dashed"
        /><span class="flex-none ">Profile Customizer</span><span class="flex-none font-mono "
          >2002-2006</span
        ></a
      >
    </div>
  </div>
</section>

<!-- Projects -->

<section id="projects">
  <div class="container">
    <div>
      <div class="mb-10">
        <h3 class="text-2xl font-bold mb-4">What I'm Working on</h3>
        <div class="mb-4">
          <p>
            My latest project is a pet adoption platform for the Philippines. Since I came here in
            late 2008, I have felt obligated to save all of the abandoned kittens I happen to
            stumble upon. Unfortunately I am just one person and I can't save them all. What I can
            do is make web applications. I am building a web platform to allow Filipinos to easier
            find pets who need adoption.
          </p>
          <a class="text-base-content/75 font-semibold" href="#"
            >Find out more about the project here. &rarr;</a
          >
        </div>

        <!-- <p>
          This is going to be synced up with a notion db. A property: ExternalLink will determine if
          it will display a page or just link to github/ other url. The projects listed here will
          have a featured property set to true.
        </p> -->
      </div>
      <div class="grid md:grid-cols-2 gap-2 grid-auto-rows">
        {#each PROJECTS as project}
          <ProjectCard
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
          />
        {/each}
      </div>
      <div class="text-right">
        <p class="mt-4">
          <a class="lowercase text-base-content/75 font-semibold" href="/"
            >View All Projects &rarr;</a
          >
        </p>
      </div>
    </div>
  </div>
</section>
