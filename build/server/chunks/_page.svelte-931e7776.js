import { c as create_ssr_component, e as escape, d as each, v as validate_component } from './index2-b63c4e3b.js';
import { C as Card2 } from './card2-069c52e9.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container mb-8"><a href="${"/play/" + escape(data["day7"]["channel_id"], true)}" class="m-4 font-medium flex items-center title-font mb-4 text-gray-900"><img class="inline-block mr-2" src="/back.svg" alt=""> ${escape(data["day7"]["channel_name"])}</a>
    <h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Today: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day7"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 1: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day1"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 2: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day2"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 3: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day3"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 4: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day4"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 5: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day5"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<hr>

<h3 class="m-4 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Day 6: </h3>
<div class="container grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mx-auto mb-6">${each(data["day6"]["epg"], (d) => {
    return `
    ${validate_component(Card2, "Card").$$render($$result, { channel: d }, {}, {})}`;
  })}</div>

<hr>



<hr></div>

<hr>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-931e7776.js.map
