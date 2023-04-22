import express from "express";
import cors from "cors";
// require("dotenv")["config"]();
import chalk from "chalk";
const app = express();
app.use(express.urlencoded({ extended: true}));
import fs from 'fs';
app.use(express.json());
const PORT = process.env.PORT || 3500;
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



import { handler } from "file://D:/projects/JTVServer github/WEB/build/handler.js";


if (!fs.existsSync("channel.db")) {
  fs["writeFileSync"]("./channel.db", '{"channel": {}}');
}

if (!fs.existsSync("channel-catchup.db")) {
  fs["writeFileSync"]("./channel-catchup.db", '{"channel": {}}');
}

app.get("/login", (req, res) => {
  res.sendFile("public/login.html");
})

app.get("/admin", (req, res) => {
  res.sendFile(path.join( __dirname,  "public", "login.html"));
});

app.use(cors());

import loginRoute from './routes/login.mjs';
import ipRoute from "./routes/ip.mjs";
import channelsRoute from "./routes/channel.mjs";
import playlistRoute from "./routes/playlist.mjs";
import catchulRoute from "./routes/catchup/index.mjs";

app.use("/", loginRoute);
app.use("/", ipRoute);
app.use("/", channelsRoute);
app.use("/", playlistRoute);
app.use("/catchup", catchulRoute);



app.get("/SonyLiv", (req, res) => {
  let url = req.query.url;
  res
    .status(200)
    .send(
      `<html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><link rel="shortcut icon" type="image/x-icon" href="https://jiotv.com/src/resources/images/JioTV_logo.png"><link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" /><link href="https://fonts.googleapis.com/css?family=Poppins|Quattrocento+Sans" rel="stylesheet" /><script src="https://cdn.plyr.io/3.6.3/plyr.js"></script><script src="https://cdn.jsdelivr.net/npm/hls.js"></script><script async src="https://www.googletagmanager.com/gtag/js?id=G-F033WLZ7K5"></script><script>window.dataLayer = window.dataLayer || [];function gtag() { dataLayer.push(arguments); }gtag('js', new Date());gtag('config', 'G-F033WLZ7K5');</script><style>html{margin:0;padding:0}html{font-family:sans-serif;background:#000}.plyr{height:100%;width:100%}:root{--plyr-color-main:#d9230f}.loading{position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999}.loading-text{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;text-align:center;width:100%;height:100px;line-height:100px}.loading-text span{display:inline-block;margin:0 5px;color:#d9230f;font-family:'Quattrocento Sans',sans-serif}.loading-text span:nth-child(1){filter:blur(0);animation:blur-text 1.5s 0s infinite linear alternate}.loading-text span:nth-child(2){filter:blur(0);animation:blur-text 1.5s .2s infinite linear alternate}.loading-text span:nth-child(3){filter:blur(0);animation:blur-text 1.5s .4s infinite linear alternate}.loading-text span:nth-child(4){filter:blur(0);animation:blur-text 1.5s .6s infinite linear alternate}.loading-text span:nth-child(5){filter:blur(0);animation:blur-text 1.5s .8s infinite linear alternate}.loading-text span:nth-child(6){filter:blur(0);animation:blur-text 1.5s 1s infinite linear alternate}.loading-text span:nth-child(7){filter:blur(0);animation:blur-text 1.5s 1.2s infinite linear alternate}.loading-text span:nth-child(8){filter:blur(0);animation:blur-text 1.5s 1.4s infinite linear alternate}.loading-text span:nth-child(9){filter:blur(0);animation:blur-text 1.5s 1.6s infinite linear alternate}@keyframes blur-text{0%{filter:blur(0)}100%{filter:blur(4px)}}.plyr__video-wrapper::before{position:absolute;top:10px;right:10px;z-index:10;content:'';height:35px;width:35px;background:url('') no-repeat;background-size:35px auto,auto}.plyr__video-wrapper::after{position:absolute;top:10px;left:10px;z-index:10;content:'';height:35px;width:35px;background:url(https://jiotv.com/src/resources/images/JioTV_logo.png) no-repeat;background-size:35px auto,auto}</style></head><body><div id="loading" class="loading"><div class="loading-text"><span class="loading-text-words">J</span><span class="loading-text-words">T</span><span class="loading-text-words">V</span><span class="loading-text-words">S</span><span class="loading-text-words">e</span><span class="loading-text-words">r</span><span class="loading-text-words">v</span><span class="loading-text-words">e</span><span class="loading-text-words">r</span></div></div><video autoplay controls crossorigin poster="https://jiotv.com/src/resources/images/JioTV_logo.png" playsinline></video></body><script> setTimeout(videovisible, 4000); function videovisible() {document.getElementById('loading').style.display = 'none';} document.addEventListener("DOMContentLoaded", () => { const e = document.querySelector("video"); const params = new URLSearchParams(window.location.search),n = "${url}",o = {}; if (Hls.isSupported()) { var config = { maxMaxBufferLength: 100,}; const t = new Hls(config); t.loadSource(n), t.on(Hls.Events.MANIFEST_PARSED, function (n, l) { const s = t.levels.map(e => e.height); o.controls = ['play-large', 'play', 'mute', 'volume', 'settings', 'fullscreen']; o.quality = {default: s[0],options: s,forced: !0,onChange: e => (function (e) {window.hls.levels.forEach((n, o) => {n.height === e && (window.hls.currentLevel = o);})})(e)}; new Plyr(e, o);}), t.attachMedia(e), window.hls = t } else {new Plyr(e, o) }});</script></html>`
    );
});

// app.use(express.static(path.join(__dirname, "public")));

app.use(handler);

app.listen(PORT, () => {
    console.log("===================================================================");
    console.log(chalk.green("THIS SERVER IS 100% FREE. PLEASE DON'T PAY ANYONE."));
    console.log(chalk.green("STRICT ACTION WILL BE TAKEN AGAINST THOSE WHO ARE SELLING THIS."));
    console.log(chalk.green("IF ANYONE TRYING TO SELL IT, PLEASE REPORT IT ON OUR DISCORD SERVER\nhttps://discord.gg/suyzkCQKhC"));
    console.log(chalk.green("VERSION 2.8.6"));
    console.log(chalk.green("980+ CHANNELS AVAILABLE. MORE FEATURES WILL COME SOON. STAY TUNED"));
    console.log("===================================================================");
    console.log(chalk.red("       __ ____ ____     ______ _    __ \n      / //  _// __ \\   /_  __/| |  / / \n __  / / / / / / / /    / /   | | / /  \n/ /_/ /_/ / / /_/ /    / /    | |/ /   \n\\____//___/ \\____/    /_/     |___/    \n                                "));
    console.log("===================================================================");
    console.log(`TV server is running on port ${PORT}`);
    console.log(`Please open http://localhost:${PORT}/login to login and get playlist if running server for the first time`);
    // console.log(chalk.red("need to login every 24 hours even if you are already logged in"));
    console.log("If facing any errors, please login from portal again");
    console.log("you can use server m3u8 links in other websites and apps");
});
