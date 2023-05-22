import { c as create_ssr_component } from './index2-b63c4e3b.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1udkor_START --><style>.body {
			background-image: url(https://jiotv.com/src/resources/images/Redirection-screen_Background.jpg);
			background-size: cover;
      height: 92.5vh
		}
	</style><!-- HEAD_svelte-1udkor_END -->`, ""}

<div class="body flex flex-col"><img src="https://jiotv.com/src/resources/images/JioTV_logo.png" alt="JioTV Logo" width="100px" height="100px" class="mx-auto">
	<h1 class="text-3xl font-bold mx-auto title-font text-white">JTVServer admin</h1>
	
	<div class="alert" style="display: none"><span class="closebtn" onclick="this.parentElement.style.display='none';">×</span></div>
	<tab-container><input type="radio" id="tabToggle01" name="tabs" value="1" checked>
		<label class="toggleLabel" for="tabToggle01" checked="checked">JioTV Login</label>
		<input type="radio" id="tabToggle02" name="tabs" value="2">
		<label class="toggleLabel" for="tabToggle02">IP Setup</label>
		<tab-content><form action="login" method="POST"><div class="formcontainer"><div class="container"><input id="mobile" name="mobile" type="text" placeholder="Mobile Number" required>
						<input id="otp" name="otp" type="hidden" placeholder="OTP"></div>
					<button id="sendOTP" type="submit">Send OTP</button>
					<p style="text-align: center; font-size: small; opacity: 0.5">JioTV login</p></div></form></tab-content>
		<tab-content><form action="/ip" method="POST"><div class="formcontainer"><div class="container"><input id="ipinput" name="ip" type="text" placeholder="Enter Your IP" required></div>
					<button type="submit">Set IP</button>
					<p style="text-align: center; font-size: small; opacity: 0.5">JioTV IP Setup</p></div></form></tab-content></tab-container>
	<div class="formcontainer"><a href="/playlist/download"><button>Download Playlist</button></a>
		<button id="copyPlaylist" onclick="copyPlaylist()" type="submit">Copy Playlist Url</button></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5b1100c1.js.map
