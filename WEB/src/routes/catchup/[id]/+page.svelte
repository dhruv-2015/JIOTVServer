<script>
	import Card from '$lib/componant/card2.svelte';

    export let data;
</script>


<div class="container mb-8">
<a href="/play/{data['day7']['channel_id']}" class="m-4 font-medium flex items-center title-font mb-4 text-gray-900"> <img class="inline-block mr-2" src="/back.svg" alt=""> {data['day7']['channel_name']} </a>
    <h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Today: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day7']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 1: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day1']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 2: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day2']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 3: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day3']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 4: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day4']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 5: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day5']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 6: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">
    {#each data['day6']['epg'] as d}
    <!-- {JSON.stringify(d)} -->
    <Card channel={d} />
    {/each}
</div>

<hr>



<hr>

</div>

<hr>