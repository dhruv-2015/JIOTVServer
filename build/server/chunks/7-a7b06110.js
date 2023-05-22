const load = async ({ fetch }) => {
  let r = await fetch(
    "/playlist/json"
  );
  let data = await r.json();
  return data;
};
const ssr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 7;
const component = async () => (await import('./_page.svelte-d520c253.js')).default;
const universal_id = "src/routes/catchup/play/[id]/[cstart]/[cend]/+page.js";
const imports = ["_app/immutable/entry/catchup-play-_id_-_cstart_-_cend_-page.svelte.38cfc68d.js","_app/immutable/chunks/index.261bd982.js","_app/immutable/chunks/stores.7b6c7fd7.js","_app/immutable/chunks/singletons.1af925a5.js","_app/immutable/chunks/index.81e6e6b3.js","_app/immutable/chunks/usePlayerStore.e710b410.js","_app/immutable/entry/catchup-play-_id_-_cstart_-_cend_-page.js.934ff4a1.js","_app/immutable/chunks/_page.63afa2b6.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-a7b06110.js.map
