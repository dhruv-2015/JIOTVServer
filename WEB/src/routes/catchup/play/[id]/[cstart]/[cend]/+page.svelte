<script>
	import { page } from '$app/stores';
	const { id, cstart, cend } = $page.params;
	export let data;

    let channel = data['result'].find((e) => e.channel_id == id);
	import Player from '$lib/componant/player2.svelte';
</script>

<link rel="icon"
        href="https://jiotv.catchup.cdn.jio.com/dare_images/images/{channel.logoUrl}">
<div class="container">
    <div class="">
        <div class="md:w-[80%]">
            <Player channel={channel} id={id} cstart={cstart} cend={cend}></Player>
        </div>
    </div>
    <div class="md:w-[80%] mb-4 m-3">
        <h3 class="mt-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{(channel.isCatchupAvailable) ?"Catchup":"Catchup is not available"}</h3>
        <div class="grid grid-cols-4 text-center gap-3">
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/0" data-sveltekit-preload-data="hover"><div></div>Day 1</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/1" data-sveltekit-preload-data="hover"><div></div>Day 2</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/2" data-sveltekit-preload-data="hover"><div></div>Day 3</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/3" data-sveltekit-preload-data="hover"><div></div>Day 4</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/4" data-sveltekit-preload-data="hover"><div></div>Day 5</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/5" data-sveltekit-preload-data="hover"><div></div>Day 6</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}/6" data-sveltekit-preload-data="hover"><div></div>Day 7</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="/catchup/{id}" data-sveltekit-preload-data="hover"><div></div>All</a>
        </div>
    </div>
</div>