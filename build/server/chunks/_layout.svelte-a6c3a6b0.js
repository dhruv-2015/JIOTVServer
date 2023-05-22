import { c as create_ssr_component } from './index2-b63c4e3b.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="text-gray-600 body-font"><div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"><a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"><span class="ml-3 text-xl">JTVServer</span></a>
    
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"><a href="/" class="mr-5 hover:text-gray-900">Home</a>
      
      <a href="/admin" class="mr-5 hover:text-gray-900">Admin</a>
      <a href="https://discord.gg/suyzkCQKhC" class="mr-5 hover:text-gray-900">Discord</a></nav>
    <div class=""><div class="relative flex w-full flex-wrap items-stretch mt-4">

        

        </div></div></div></header>
<main class="">${slots.default ? slots.default({}) : ``}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a6c3a6b0.js.map
