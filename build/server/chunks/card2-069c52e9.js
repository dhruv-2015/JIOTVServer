import { c as create_ssr_component, e as escape, b as add_attribute } from './index2-b63c4e3b.js';

const Card2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { channel } = $$props;
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  return `<a href="${"/catchup/play/" + escape(channel["channel_id"], true) + "/" + escape(channel["startEpoch"], true) + "/" + escape(channel["endEpoch"], true)}"${add_attribute("id", channel["channel_id"], 0)} data-sveltekit-preload-data="hover" class="flex h-72 w-44 flex-row mb-3 ml-1 gap-3 justify-center align-middle"><div class="bg-gray-100 p-6 rounded-lg"><img class="w-56 rounded w-full object-cover object-center mb-6" loading="lazy" src="${"https://jiotv.catchup.cdn.jio.com/dare_images/shows/" + escape(channel["episodePoster"], true)}"${add_attribute("alt", channel["channel_name"], 0)}>
		<h2 class="text-lg text-gray-900 font-medium title-font">${escape(channel["showname"].length > 15 ? channel["showname"].substring(0, 15) + "..." : channel["showname"])}</h2>
		<p class="leading-relaxed text-base">${escape(channel["description"].length > 50 ? channel["description"].substring(0, 50) + "..." : channel["description"])}</p></div></a>`;
});

export { Card2 as C };
//# sourceMappingURL=card2-069c52e9.js.map
