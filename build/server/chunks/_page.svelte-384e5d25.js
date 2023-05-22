import { c as create_ssr_component, a as subscribe, e as escape, d as each, v as validate_component } from './index2-b63c4e3b.js';
import { p as page } from './stores-bb8c46c1.js';
import { C as Card2 } from './card2-069c52e9.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { id, day } = $page.params;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<title>Day ${escape(parseInt(day))} catchup</title>

<div class="container">
	<a class="m-4 sm:text-xl font-medium mb-4 text-blue-600" href="${"/play/" + escape(id, true)}">${escape(data["channel_name"])}</a>
<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day ${escape(parseInt(day))}: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["epg"], (d) => {
    return `${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-384e5d25.js.map
