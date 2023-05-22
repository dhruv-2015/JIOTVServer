const load = async ({ fetch }) => {
  let r = await fetch(
    "/playlist/json"
  );
  let data = await r.json();
  if (data["code"] == 200) {
    return data;
  }
};
const ssr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 12;
const component = async () => (await import('./_page.svelte-a64f1bb3.js')).default;
const universal_id = "src/routes/search/+page.js";
const imports = ["_app/immutable/entry/search-page.svelte.79a48969.js","_app/immutable/chunks/index.261bd982.js","_app/immutable/chunks/search.24a592ed.js","_app/immutable/chunks/index.81e6e6b3.js","_app/immutable/entry/search-page.js.6d42f871.js","_app/immutable/chunks/_page.6357966c.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-8ef71d3d.js.map
