import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, f as createEventDispatcher, b as add_attribute } from './index2-b63c4e3b.js';
import { p as page } from './stores-bb8c46c1.js';
import { P as Player, H as Hls, D as DefaultUi } from './usePlayerStore-1903c19b.js';
import '@vime/core';

const Player_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { channel } = $$props;
  let { id } = $$props;
  let { channel_name, isCatchupAvailable, logoUrl } = channel;
  createEventDispatcher();
  let script;
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<link rel="icon" href="${"https://jiotv.catchup.cdn.jio.com/dare_images/images/" + escape(logoUrl, true)}">
${$$result.head += `<!-- HEAD_svelte-hc9dsa_START --><script src="https://cdn.jsdelivr.net/npm/@vime/core@^5/dist/vime/vime.esm.js"${add_attribute("this", script, 0)}><\/script><!-- HEAD_svelte-hc9dsa_END -->`, ""}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css">
<title>${escape(channel_name)}</title>

${validate_component(Player, "Player").$$render(
    $$result,
    {
      theme: "dark",
      style: "--vm-player-theme: #ff0000;"
    },
    {},
    {
      default: () => {
        return `${validate_component(Hls, "Hls").$$render(
          $$result,
          {
            crossOrigin: true,
            poster: "https://jiotv.catchup.cdn.jio.com/dare_images/images/" + logoUrl
          },
          {},
          {
            default: () => {
              return `<source data-src="${"/getm3u8/" + escape(id, true) + "/master.m3u8"}" type="application/x-mpegURL">`;
            }
          }
        )}
  
  ${validate_component(DefaultUi, "DefaultUi").$$render($$result, {}, {}, {})}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { id } = $page.params;
  let { data } = $$props;
  let channel = data["result"].find((e) => e.channel_id == id);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<link rel="icon" href="${"https://jiotv.catchup.cdn.jio.com/dare_images/images/" + escape(channel.logoUrl, true)}">

<div class="container"><div class=""><div class="md:w-[80%]">${validate_component(Player_1, "Player").$$render($$result, { channel, id }, {}, {})}</div></div>
    <div class="md:w-[80%] mb-4 m-3"><h3 class="mt-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">${escape(channel.isCatchupAvailable ? "Catchup" : "Catchup is not available")}</h3>
        <div class="grid grid-cols-4 text-center gap-3"><a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/0"}" data-sveltekit-preload-data="hover"><div></div>Today</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/1"}" data-sveltekit-preload-data="hover"><div></div>Day 1</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/2"}" data-sveltekit-preload-data="hover"><div></div>Day 2</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/3"}" data-sveltekit-preload-data="hover"><div></div>Day 3</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/4"}" data-sveltekit-preload-data="hover"><div></div>Day 4</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/5"}" data-sveltekit-preload-data="hover"><div></div>Day 5</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true) + "/6"}" data-sveltekit-preload-data="hover"><div></div>Day 6</a>
            <a class="text-white text-lg rounded-lg p-1 bg-blue-700" href="${"/catchup/" + escape(id, true)}" data-sveltekit-preload-data="hover"><div></div>All</a></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6a6266ab.js.map
