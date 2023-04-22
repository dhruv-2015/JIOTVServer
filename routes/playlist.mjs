import express from "express";
const router = express.Router();
import fetch from "node-fetch";
import fs from "fs";
import playlist from "../utils/genPlaylist.mjs";



import jsonPlaylist from "../utils/getJsonPlaylist.mjs";
const PORT = process.env.PORT || 3500;

router.get("/playlist", async (req, res) => {
  res.contentType("application/vnd.apple.mpegurl");
  let ip;
  if (fs["existsSync"]("ipData.jiotv")) {
    ip = fs["readFileSync"]("ipData.jiotv", {
      encoding: "utf8",
      flag: "r",
    });
  } else {
    ip = "127.0.0.1";
  }
  const playlistData = await playlist(`${ip}:${PORT}`);
  res.status(200).send(playlistData);
});

router.get("/playlist/download", async (req, res) => {
  res.contentType("application/vnd.apple.mpegurl");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "playlist.m3u8"
  );
  let ip;
  if (fs["existsSync"]("ipData.jiotv")) {
    ip = fs["readFileSync"]("ipData.jiotv", {
      encoding: "utf8",
      flag: "r",
    });
  } else {
    ip = "127.0.0.1";
  }

  const playlistData = await playlist(`${ip}:${PORT}`);
  res.status(200).send(playlistData);
});

router.get("/playlist/json", async (req, res) => {
  res.set("Cache-control", "public, max-age=" + 60 * 60 * 2);

  res.status(200).send(await jsonPlaylist());
});

router.get("/updateplaylist", async (req, res) => {
  var options = {
    method: "GET",
    params: {},
    headers: {
      Accept: "*/*",
      "User-Agent": "plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7",
    },
  };
  let response = await fetch(
    "https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone",
    options
  );
  response = await response.json();
  fs["writeFileSync"]("./channels.jiotv", JSON.stringify(response));
  res.status(200).send(response);
});

export default router;