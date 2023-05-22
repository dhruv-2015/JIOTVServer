const load = async ({ fetch, params }) => {
  async function fetchData() {
    let r = await fetch(
      `https://jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?channel_id=${params.id}&offset=${params.day == "0" ? "0" : "-" + params.day}&langId=6`
    );
    return await r.json();
  }
  return fetchData();
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-384e5d25.js')).default;
const universal_id = "src/routes/catchup/[id]/[day]/+page.js";
const imports = ["_app/immutable/entry/catchup-_id_-_day_-page.svelte.6b83dcbe.js","_app/immutable/chunks/index.261bd982.js","_app/immutable/chunks/stores.7b6c7fd7.js","_app/immutable/chunks/singletons.1af925a5.js","_app/immutable/chunks/index.81e6e6b3.js","_app/immutable/chunks/card2.747e2d72.js","_app/immutable/entry/catchup-_id_-_day_-page.js.c7dd0c89.js","_app/immutable/chunks/_page.4f7cfbe7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=9-1c62d0c3.js.map
