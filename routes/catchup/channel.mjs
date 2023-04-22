import express from "express";
const router = express.Router();
import fs from "fs";
import fetch from "node-fetch";
import chalk from "chalk";
import httpProxy from "http-proxy";
const apiProxy = httpProxy["createProxyServer"]();

import { getCookie } from "../../utils/catchup/cookieManager.mjs";

import {
  getManifist,
  getM3u8,
  genM3u8,
} from "../../utils/catchup/generator.mjs";

router.get("/getm3u8/:start/:end/:id/index.m3u8", async (req, res) => {
  const { id, start, end } = req.params;
  let decryptionData = await getManifist(id, start, end);
  // console.log(decryptionData);
  if (!decryptionData["success"]) {
    return res.redirect(req.originalUrl);
  }
  res.set("Content-Type", "application/vnd.apple.mpegurl");
  return res.status(200).send(Buffer.from(decryptionData["data"], 'utf-8'));
});
// master.m3u8
router.get("/getm3u8/:start/:end/:id/master.m3u8", async (req, res) => {
  const { id, start, end } = req.params;
  let decryptionData = await getManifist(id, start, end);
  // console.log(decryptionData);
  if (!decryptionData["success"]) {
    return res.redirect(req.originalUrl);
  }
  res.set("Content-Type", "application/vnd.apple.mpegurl");
  return res.status(200).send(Buffer.from(decryptionData["data"], "utf-8"));
});

router.get("/getm3u8/:start/:end/:id", async (req, res) => {
  const { id, start, end } = req.params;
  const { m3u8, vbegin, vend } = req.query;
  let decryptionData = await getM3u8(id, start, end, m3u8, vbegin, vend);
  // console.log(decryptionData);
  if (decryptionData == "newGen") {
    return res.redirect(req.oiginalUrl);
  }
  res.set("Content-Type", "application/vnd.apple.mpegurl");
  return res.status(200).send(decryptionData);
});

router.get("/getts/:start/:end/:id", async (req, res) => {
  const { ts } = req.query;
  const { id, start, end } = req.params;
  const cookie = await getCookie(id, start, end);
  try {
    if (!cookie.success) {
      await genM3u8(id);
      return res.redirect(req.originalUrl);
    }
    const userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );

    let options = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "User-Agent": "plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7",
        channelid: "0",
        crmid: userDataJiotv["sessionAttributes"]["user"]["subscriberId"],
        deviceId: "3c6d6b5700fa09bd",
        devicetype: "phone",
        os: "Android",
        osVersion: "7.1.2",
        srno: "230128144001",
        ssotoken: userDataJiotv["ssoToken"],
        uniqueId: userDataJiotv["sessionAttributes"]["user"]["unique"],
        userId: userDataJiotv["sessionAttributes"]["user"]["uid"],
        usergroup: "tvYR7NSNn7rymo3F",
        versionCode: "226",
        Cookie: cookie.data,
      },
    };

    try {
      let r = await fetch(ts, options);
      let apiResponse = await r.arrayBuffer();

      res.set("content-type", "application/octet-stream");
      res.status(r.status).send(Buffer.from(apiResponse));
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.log(chalk["red"](error));
  }
});

router.get("/getkey/:start/:end/:id", async (req, res) => {
  const { key } = req.query;
  const { id, start, end } = req.params;
  const cookie = await getCookie(id, start, end);

  if (!cookie.success) {
    await genM3u8(id, start, end);
    return res.redirect(req.originalUrl);
  }
  const userDataJiotv = JSON["parse"](
    fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
  );
  let url = `https://tv.media.jio.com${key}`;

  let options = {
    method: "GET",
    headers: {
      Accept: "*/*",
      "User-Agent": "plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7",
      channelid: "0",
      crmid: userDataJiotv["sessionAttributes"]["user"]["subscriberId"],
      deviceId: "3c6d6b5700fa09bd",
      devicetype: "phone",
      os: "Android",
      osVersion: "7.1.2",
      srno: "230128144001",
      ssotoken: userDataJiotv["ssoToken"],
      uniqueId: userDataJiotv["sessionAttributes"]["user"]["unique"],
      userId: userDataJiotv["sessionAttributes"]["user"]["uid"],
      usergroup: "tvYR7NSNn7rymo3F",
      versionCode: "226",
      Cookie: cookie.data,
    },
  };

  try {
    let r = await fetch(url, options);
    let apiResponse = await r.arrayBuffer();

    res.set("content-type", "application/octet-stream");
    res.status(r.status).send(Buffer.from(apiResponse));
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

export default router;
// module.exports = router;
