import { c as create_ssr_component, a as subscribe } from './index2-b63c4e3b.js';
import { p as page } from './stores-bb8c46c1.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params;
  $$unsubscribe_page();
  return ``;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a5b5afe9.js.map
