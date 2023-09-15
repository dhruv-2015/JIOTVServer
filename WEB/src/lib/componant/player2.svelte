<script>

	export let channel;
    export let id;
    export let cstart;
    export let cend;
    let { channel_name, isCatchupAvailable, logoUrl } = channel;
    // import '@vime/core/themes/default.css';
import { Player, Hls, DefaultUi } from '@vime/svelte';
import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let script;

  onMount(async () => {
    script.addEventListener('load', () => {
      dispatch('loaded');
    })

    script.addEventListener('error', (event) => {
      console.error("something went wrong", event);
      dispatch('error');
    });
  });

</script>
<link rel="icon"
        href="https://jiotv.catchup.cdn.jio.com/dare_images/images/{logoUrl}">
<svelte:head>
  <script bind:this={script} src="https://cdn.jsdelivr.net/npm/@vime/core@^5/dist/vime/vime.esm.js" />
</svelte:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />
<title>{channel_name}</title>
<!-- {JSON.stringify(channel)} -->
<Player
  theme="dark"
  style="--vm-player-theme: #ff0000;"
>
  <Hls
    crossOrigin
    poster="https://jiotv.catchup.cdn.jio.com/dare_images/images/{logoUrl}"
  >
    <source 
      data-src="/catchup/getm3u8/{cstart}/{cend}/{id}/index.m3u8" 
      type="application/x-mpegURL" 
    />
  </Hls>
  
  <DefaultUi />
</Player>
