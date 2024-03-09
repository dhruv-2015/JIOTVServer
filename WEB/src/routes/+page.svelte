<script>
	import Card from '$lib/componant/card.svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	export let data;
	import { onDestroy } from 'svelte';
	const categoryMap = { 8: 'Sports', 5: 'Entertainment', 6: 'Movies', 12: 'News', 13: 'Music', 7: 'Kids', 9: 'Lifestyle', 10: 'Infotainment', 15: 'Devotional', 0x10: 'Business', 17: 'Educational', 18: 'Shopping', 19: 'JioDarshan'};
	const langMap = { 6: 'English', 1: 'Hindi', 2: 'Marathi', 3: 'Punjabi', 4: 'Urdu', 5: 'Bengali', 7: 'Malayalam', 8: 'Tamil', 9: 'Gujarati', 10: 'Odia', 11: 'Telugu', 12: 'Bhojpuri', 13: 'Kannada', 14: 'Assamese', 15: 'Nepali', 16: 'French'};

	const searchProducts = data.result.map((e) => ({
		...e,
		searchTerms: `${e.channelCategoryId} ${e.channel_id} ${e.channel_name} ${
			categoryMap[e.channelCategoryId]
		} ${langMap[e.channelLanguageId]} ${e.isHD ? 'HD' : 'SD'}`
	}));
	const searchStore = createSearchStore(searchProducts);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
	onDestroy(() => {
		unsubscribe();
	});
</script>

<title>Watch Your Favorite Tv Channels For Free</title>
	<div class="container">
	<div class="flex flex-row mb-3 ml-1 gap-3 justify-center align-middle">
		<input
			type="search"
			id="search"
			bind:value={$searchStore.search}
			class="relative w-[100%] col-span-4 block mx-4 rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-600 dark:placeholder:text-neutral-700"
			placeholder="Search"
		/>
	</div>
	
	<div
		class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto"
	>
		{#each $searchStore.filtered as channel}
			<Card {channel} />
		{/each}
	</div>
</div>
