<script>
	export let channel;
	const genreMap = {
		8: 'Sports',
		5: 'Entertainment',
		6: 'Movies',
		12: 'News',
		13: 'Music',
		7: 'Kids',
		9: 'Lifestyle',
		10: 'Infotainment',
		15: 'Devotional',
		0x10: 'Business',
		17: 'Educational',
		18: 'Shopping',
		19: 'JioDarshan'
	};
	const lenMap = {
		6: 'English',
		1: 'Hindi',
		2: 'Marathi',
		3: 'Punjabi',
		4: 'Urdu',
		5: 'Bengali',
		7: 'Malayalam',
		8: 'Tamil',
		9: 'Gujarati',
		10: 'Odia',
		11: 'Telugu',
		12: 'Bhojpuri',
		13: 'Kannada',
		14: 'Assamese',
		15: 'Nepali',
		16: 'French'
	};
</script>
<a href="/play/{channel['channel_id']}" id="{channel['channel_id']}" data-sveltekit-preload-data="hover">
<div class="card w-40 bg-gray-100 rounded-xl bg-base-100 shadow-lg h-48 mb-4 flex flex-col">
	<img
		src="https://jiotv.catchup.cdn.jio.com/dare_images/images/{channel['logoUrl']}"
		alt={channel['channel_name']}
		loading="lazy"
		class="h-28 mt-5 m-auto opacity-100"
	/>
	<div class="mb-5 opacity-100">
		<h2 class="text-center text-sm font-bold">{channel['channel_name']}</h2>
		<div class="flex justify-center space-x-1">
			<img src="/1.svg" alt="" />
			<p class="text-xs text-center">{genreMap[channel['channelCategoryId']]}</p>
			<img src="/2.svg" alt="" />
			<p class="text-xs text-center">{lenMap[channel['channelLanguageId']]}</p>
		</div>
	</div>
</div>
</a>