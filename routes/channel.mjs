import express from "express";
const router = express.Router();
import fs from "fs";
import fetch from "node-fetch";
import chalk from "chalk";

import { getCookie, getAll } from "../utils/cookieManager.mjs";

import { getManifist, getM3u8, genM3u8 } from "../utils/generator.mjs";

router.get("/getm3u8/:id/master.m3u8", async (req, res) => {
  const id = req.params.id;
  let decryptionData = await getManifist(id);
  if (!decryptionData["success"]) {
    return res.redirect(req.originalUrl);
  }
  res.header("Content-Type", "application/vnd.apple.mpegurl");
  return res.status(200).send(decryptionData["data"]);
});

router.get("/getm3u8/:id", async (req, res) => {
  const id = req.params.id;
  let decryptionData = await getManifist(id);
  if (!decryptionData["success"]) {
    return res.redirect(req.originalUrl);
  }
  res.header("Content-Type", "application/vnd.apple.mpegurl");
  return res.status(200).send(decryptionData["data"]);
});

router.get("/getm3u8", async (req, res) => {
  const id = req.query.id;
  const m3u8 = req.query.m3u8;
  let decryptionData = await getM3u8(m3u8, id);
  if (decryptionData == "newGen") {
    return res.redirect(req.originalUrl);
  }
  res.header("Content-Type", "application/vnd.apple.mpegurl");
  res.status(200).send(decryptionData);
});

router.get("/getts", async (req, res) => {
  const { id, ts } = req.query;
  const cookie = await getCookie(id);
  try {
    let url = `https:/${ts}`;

    let options = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "User-Agent": "plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7",
        Cookie: cookie.data,
      },
    };

    let r = await fetch(url, options);
    if (r.status == 200) {
      res.status(r.status).send(await r.buffer());
    } else {
      res.status(r.status).send(await r.text());
    }
  } catch (error) {
    console.log(chalk["red"](error));
    res.status(500).send(error);
  }
});

router.get("/getkey", async (req, res) => {
  const { id, key } = req.query;
  const cookie = await getCookie(id);
  if (!cookie.success) {
    await genM3u8(id);
    return res.redirect(req.originalUrl);
  }
  let userDataJiotv = JSON["parse"](
    fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
  );
  let url = `https://tv.media.jio.com/${key}`;

  let options = {
    method: "GET",
    headers: {
      Accept: "*/*",
      "User-Agent": "plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7",
      appkey: "NzNiMDhlYzQyNjJm",
      devicetype: "phone",
      os: "android",
      deviceId: "3c6d6b5702fa09bd",
      isott: "false",
      channelid: id,
      Cookie: cookie.data,
      osVersion: "7.1.2",
      srno: "230128144001",
      ssotoken: userDataJiotv["ssoToken"],
      uniqueId: userDataJiotv["sessionAttributes"]["user"]["unique"],
      userId: userDataJiotv["sessionAttributes"]["user"]["uid"],
      crmid: userDataJiotv["sessionAttributes"]["user"]["subscriberId"],
      usergroup: "tvYR7NSNn7rymo3F",
      versionCode: "226",
      Connection: "Keep-Alive",
      "Accept-Encoding": "gzip",
    },
  };
  try {
    let r = await fetch(url, options);
    return res
      .status(r.status)
      .send(r.status == 200 ? await r.buffer() : await r.text());
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

export default router;
