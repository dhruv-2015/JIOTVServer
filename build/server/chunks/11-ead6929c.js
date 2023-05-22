const load = async ({ fetch }) => {
  let r = await fetch(
    // 'https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone'
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

const index = 11;
const component = async () => (await import('./_page.svelte-6a6266ab.js')).default;
const universal_id = "src/routes/play/[id]/+page.js";
const imports = ["_app/immutable/entry/play-_id_-page.svelte.b3412d0d.js","_app/immutable/chunks/index.261bd982.js","_app/immutable/chunks/stores.7b6c7fd7.js","_app/immutable/chunks/singletons.1af925a5.js","_app/immutable/chunks/index.81e6e6b3.js","_app/immutable/chunks/usePlayerStore.e710b410.js","_app/immutable/entry/play-_id_-page.js.934ff4a1.js","_app/immutable/chunks/_page.e56310ad.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=11-ead6929c.js.map
