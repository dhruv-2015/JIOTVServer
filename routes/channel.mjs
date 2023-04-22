import express from "express";
const router = express.Router();
import fs from "fs";

import chalk from "chalk";
import httpProxy from "http-proxy";
const apiProxy = httpProxy["createProxyServer"]({ secure: ![] });


import { getCookie, getAll } from "../utils/cookieManager.mjs";

  
import { getManifist, getM3u8, genM3u8 } from "../utils/generator.mjs";


router.get("/getm3u8/:id/master.m3u8", async (req, res) => {
  const id = req.params.id;
  let decryptionData = await getManifist(id);
  if (!decryptionData["success"]) {
      return res.redirect(req.originalUrl);
  }
  res.header("Content-Type", "application/vnd.apple.mpegurl");
  return res.status(200).send(decryptionData['data']);
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
    if (!cookie.success) {
      await genM3u8(id);
      return res.redirect(req.originalUrl);
    }
    const decryptiontargetUrl = `https://smumcdnems01.cdnsrv.jio.com${ts}`;

    const userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );
    apiProxy["web"](req, res, {
      target: decryptiontargetUrl,
      ignorePath: !![],
    }),
      apiProxy["on"]("proxyReq", function (pro) {
        pro["setHeader"](
          "user-agent",
          "plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7"
        ),
          pro["setHeader"]("channelid", "0"),
          pro["setHeader"](
            "crmid",
            userDataJiotv["sessionAttributes"]["user"]["subscriberId"]
          ),
          pro["setHeader"]("deviceId", "3c6d6b5702fa09bd"),
          pro["setHeader"]("devicetype", "phone"),
          pro["setHeader"]("os", "Android"),
          pro["setHeader"]("osVersion", "9"),
          pro["setHeader"]("srno", "230128144001"),
          pro["setHeader"]("ssotoken", userDataJiotv["ssoToken"]),
          pro["setHeader"](
            "uniqueId",
            userDataJiotv["sessionAttributes"]["user"]["unique"]
          ),
          pro["setHeader"](
            "userId",
            userDataJiotv["sessionAttributes"]["user"]["uid"]
          ),
          pro["setHeader"]("usergroup", "tvYR7NSNn7rymo3F"),
          pro["setHeader"]("versionCode", "226"),
          pro["setHeader"]("x-forwarded-for", "59.184.0.0"),
          pro["setHeader"]("Cookie", cookie.data),
          pro["setHeader"]("Connection", "Keep-Alive"),
          pro["setHeader"]("Accept-Encoding", "gzip");
      }),
      apiProxy["on"]("error", function (e) {
        console["log"](chalk["red"](e));
      });
  } catch (error) {
    console.log(chalk["red"](error));
  }
});

router.get("/getkey", async (req, res) => {
  const { id, key } = req.query;
  const cookie = await getCookie(id);
  // console.log(cookie);
  if (!cookie.success) {
    await genM3u8(id);
    return res.redirect(req.originalUrl);
  }
  const decryptiontargetUrl = `https://tv.media.jio.com/${key}`;
  let userDataJiotv = JSON["parse"](
    fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
  );
  apiProxy["web"](req, res, {
    target: decryptiontargetUrl,
    ignorePath: !![],
  }),
    apiProxy["on"]("proxyReq", function (pro) {
      pro["setHeader"](
        "user-agent",
        "plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7"
      ),
        pro["setHeader"]("channelid", "0"),
        pro["setHeader"](
          "crmid",
          userDataJiotv["sessionAttributes"]["user"]["subscriberId"]
        ),
        pro["setHeader"]("deviceId", "3c6d6b5702fa09bd"),
        pro["setHeader"]("devicetype", "phone"),
        pro["setHeader"]("os", "Android"),
        pro["setHeader"]("osVersion", "7.1.2"),
        pro["setHeader"]("srno", "230128144001"),
        pro["setHeader"]("ssotoken", userDataJiotv["ssoToken"]),
        pro["setHeader"](
          "uniqueId",
          userDataJiotv["sessionAttributes"]["user"]["unique"]
        ),
        pro["setHeader"](
          "userId",
          userDataJiotv["sessionAttributes"]["user"]["uid"]
        ),
        pro["setHeader"]("usergroup", "tvYR7NSNn7rymo3F"),
        pro["setHeader"]("versionCode", "226"),
        pro["setHeader"]("Cookie", cookie.data),
        pro["setHeader"]("Connection", "Keep-Alive"),
        pro["setHeader"]("Accept-Encoding", "gzip");
    }),
    apiProxy["on"]("error", function (e) {
      console["log"](chalk["red"](e));
    });
});


export default router;