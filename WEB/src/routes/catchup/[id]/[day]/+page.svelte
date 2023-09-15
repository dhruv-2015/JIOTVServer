<script>
	import { page } from '$app/stores';
	const { id, day } = $page.params;
	import Card from '$lib/componant/card2.svelte';
	export let data;

</script>

<title>Day {parseInt(day)} catchup</title>

<div class="container">

	<!-- {JSON.stringify(data)} -->
	<a class="m-4 sm:text-xl font-medium mb-4 text-blue-600" href="/play/{id}">{data['channel_name']}</a>
<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day {parseInt(day)}: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['epg'] as d}
    <Card channel={d} />
    {/each}
</div>
</div>

