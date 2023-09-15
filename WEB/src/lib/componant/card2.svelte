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

<a
	href="/catchup/play/{channel['channel_id']}/{channel['startEpoch']}/{channel['endEpoch']}"
	id={channel['channel_id']}
	data-sveltekit-preload-data="hover"
	class="flex h-72 w-44 flex-row mb-3 ml-1 gap-3 justify-center align-middle"
>
	<div class="bg-gray-100 p-6 rounded-lg">
		<img
			class="w-56 rounded w-full object-cover object-center mb-6"
			loading="lazy"
			src="https://jiotv.catchup.cdn.jio.com/dare_images/shows/{channel['episodePoster']}"
			alt={channel['channel_name']}
		/>
		<h2 class="text-lg text-gray-900 font-medium title-font">{(channel['showname'].length > 15) ? channel['showname'].substring(0, 15) + "..." : channel['showname']}</h2>
		<p class="leading-relaxed text-base">
			{(channel['description'].length > 50) ? channel['description'].substring(0, 50) + "..." : channel['description']}
		</p>
	</div>
</a>
