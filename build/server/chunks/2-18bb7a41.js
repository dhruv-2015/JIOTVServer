const load = async ({ fetch }) => {
  let r = await fetch(
    "/playlist/json"
  );
  return await r.json();
};
const ssr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  ssr: ssr
});

const index = 2;
const component = async () => (await import('./_page.svelte-51d57e49.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/entry/_page.svelte.3d137dad.js","_app/immutable/chunks/index.261bd982.js","_app/immutable/chunks/search.24a592ed.js","_app/immutable/chunks/index.81e6e6b3.js","_app/immutable/entry/_page.js.0506e731.js","_app/immutable/chunks/_page.a8c0ce60.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=2-18bb7a41.js.map
