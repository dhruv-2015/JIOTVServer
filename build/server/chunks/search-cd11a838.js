import { c as create_ssr_component, e as escape, b as add_attribute } from './index2-b63c4e3b.js';
import { w as writable } from './index-c898d641.js';

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { channel } = $$props;
  const genreMap = {
    8: "Sports",
    5: "Entertainment",
    6: "Movies",
    12: "News",
    13: "Music",
    7: "Kids",
    9: "Lifestyle",
    10: "Infotainment",
    15: "Devotional",
    16: "Business",
    17: "Educational",
    18: "Shopping",
    19: "JioDarshan"
  };
  const lenMap = {
    6: "English",
    1: "Hindi",
    2: "Marathi",
    3: "Punjabi",
    4: "Urdu",
    5: "Bengali",
    7: "Malayalam",
    8: "Tamil",
    9: "Gujarati",
    10: "Odia",
    11: "Telugu",
    12: "Bhojpuri",
    13: "Kannada",
    14: "Assamese",
    15: "Nepali",
    16: "French"
  };
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  return `<a href="${"/play/" + escape(channel["channel_id"], true)}"${add_attribute("id", channel["channel_id"], 0)} data-sveltekit-preload-data="hover"><div class="card w-40 bg-gray-100 rounded-xl bg-base-100 shadow-lg h-48 mb-4 flex flex-col"><img src="${"https://jiotv.catchup.cdn.jio.com/dare_images/images/" + escape(channel["logoUrl"], true)}"${add_attribute("alt", channel["channel_name"], 0)} loading="lazy" class="h-28 mt-5 m-auto opacity-100">
	<div class="mb-5 opacity-100"><h2 class="text-center text-sm font-bold">${escape(channel["channel_name"])}</h2>
		<div class="flex justify-center space-x-1"><img src="/1.svg" alt="">
			<p class="text-xs text-center">${escape(genreMap[channel["channelCategoryId"]])}</p>
			<img src="/2.svg" alt="">
			<p class="text-xs text-center">${escape(lenMap[channel["channelLanguageId"]])}</p></div></div></div></a>`;
});
const createSearchStore = (data) => {
  const { subscribe, set, update } = writable({
    data,
    filtered: data,
    search: ""
  });
  return {
    subscribe,
    set,
    update
  };
};
const searchHandler = (store) => {
  const searchTerm = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    return item.searchTerms.toLowerCase().includes(searchTerm);
  });
};

export { Card as C, createSearchStore as c, searchHandler as s };
//# sourceMappingURL=search-cd11a838.js.map
