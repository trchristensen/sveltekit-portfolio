<script context="module">
	import GhostContentAPI from '@tryghost/content-api';

	export async function load() {
		
		console.log("SERVER RENDERED");

		const api = new GhostContentAPI({
			url: import.meta.env.VITE_GHOST_URL,
			key: import.meta.env.VITE_GHOST_API_KEY,
			version: 'v5.0'
		});

		let posts = await api.posts.browse({
			limit: 5,
			include: 'tags,authors',
			// filter: 'tags.slug:writing'
		});
		console.log('posts', posts);

		try {
		} catch (e) {
			console.error(e);
			return {
				status: 'error'
			};
		}

		return {
			props: {
				posts
			}
		};
	}
</script>

<script lang="ts">
	export let posts: any;
</script>

<div class="container flex flex-col gap-8">
	<h2 class="text-5xl mb-4">Writing</h2>
	{#if posts}
	<ul class="list-none grid sm:grid-cols-2 gap-2">
	{#each posts as post}
	<li>
		<div class="card card-compact bg-base-300">
			<div class="card-body flex flex-col space-between">
				<div>
					<h3 class="card-title">
						<a href={post.url}>{post.title}</a>
					</h3>
					<p class="card-text line-clamp-2">{post.excerpt}</p>
				</div>
				<p class="card-text mb-0">
					<small class="text-muted">
						{post.authors[0].name}
					</small>
				</p>
			</div>
		</div>
	
	</li>
	{/each}
	</ul>
	{/if}
	<div>
		<p>
		This will be synced with a notion db. Will have topics like dev, embedded systems and automation
		coding, crypto and crypto trading, expat / nomad living, shower thoughts, rants.
	</p>
	<p>
		This site will have a comment system built in for each post that uses a db along with prisma. Actually, I think I'm just going to use the same db that ghost cms is using. Why have two databases?
	</p>
	</div>
	
</div>
