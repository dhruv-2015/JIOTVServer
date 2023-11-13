import fetch from "node-fetch";
import m3u8Parser from "./m3u8Parser.mjs";
import fs from "fs";

import jdebug from '../../utils/debug.mjs';

import refreshtoken from "../refreshToken.mjs";
import cookieManager from "./cookieManager.mjs";

import path from "path";
import { fileURLToPath } from "url";
import getProgramId from "./getProgramId.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 1699727400000/1699729920000


async function getUrl(id, start, end, retry = 0) {
  console.log("getUrl", id, start, end);
  let programId = await getProgramId(id, start, end);
  try {
    if (retry > 5) {
      return "";
    }
    let userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );
    let srno = getTtimme(start).split("T")[0];
    var options = {
      method: "POST",
      headers: {
        appkey: "NzNiMDhlYzQyNjJm",
        devicetype: "phone",
        os: "android",
        deviceId: "3c6d6b5702fa09bd",
        isott: "false",
        channel_id: id,
        accesstoken: userDataJiotv["authToken"],
        Connection: "close",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/4.2.2",
      },
      body: `stream_type=Catchup&channel_id=${id}&programId=${programId}&showtime=1000000000000&srno=${srno}&begin=${(start)}&end=${(end)}`,
      // body: `stream_type=Catchup&channel_id=${id}&programId=231110144020&showtime=1000000000000&srno=20231110&begin=1699736400000&end=1699738200000`
    };
    let response = await fetch(
      "https://jiotvapi.media.jio.com/playback/apis/v1/geturl?langId=6",
      options
    );
    // console.log("response", response);
    if (response.status == 419) {
      // AuthToken Expire so gen new
      let ref = await refreshtoken();
      jdebug('ref', ref);
      if (ref.success) {
        console.log(ref.message);
        getUrl(id, start, end, retry + 1);
      } else {
        console.log(ref.message);
        return "";
      }
    }
    let data = JSON.parse(await response.text());
    console.log(data["result"]);
    return data["result"]; // http://jiotvcod.cdn.jio.com/bpk-tv/Colors_HD_MOB/Catchup_Fallback/index.m3u8?begin=1678126680&end=1678561200&__hdnea__=st=1678611147~exp=1678614747~acl=/bpk-tv/Colors_HD_MOB/Catchup_Fallback/*~hmac=a094a407bd00d3e37aeddd63d4abc549748a93b6bb83553bf33d9f476042f061
  } catch (e) {
    console.log(e.message);
    return "";
  }
}


function getTtimme(ep) {

  // The number "20231110T160000" appears to be in a timestamp format following the pattern "YYYYMMDDTHHMMSS." In this case, it represents November 10, 2023, at 4:00:00 PM (16:00:00) in 24-hour time.
  let d = new Date(ep);
  let str = `${d.getFullYear()}${d.getMonth()}${d.getDate()}T${d.getHours()}${d.getMinutes()}${d.getSeconds()}`
  return str;
  
}


export async function genM3u8(id, start, end) {
  try {
    let channelUrl = await getUrl(id, start, end);
    jdebug('channelUrl', channelUrl);
    if (channelUrl == "") {
      return {
        success: false,
        data: "channelUrl",
      };;
    }
    const userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );
    var options = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "User-Agent": "plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7",
        crmid: userDataJiotv["sessionAttributes"]["user"]["subscriberId"],
        deviceId: "3c6d6b5702fa09bd",
        devicetype: "phone",
        os: "Android",
        osVersion: "9",
        srno: "230128144001",
        ssotoken: userDataJiotv["ssoToken"],
        uniqueId: userDataJiotv["sessionAttributes"]["user"]["unique"],
        userId: userDataJiotv["sessionAttributes"]["user"]["uid"],
        usergroup: "tvYR7NSNn7rymo3F",
        versionCode: "226",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
      },
    };
    let response = await fetch(channelUrl, options);
    // const params = (new URL(location)).searchParams;
    let m3u8ChUrl = channelUrl.split("&__hdnea__");
    m3u8ChUrl = m3u8ChUrl[0];
    // id, cookie, masterUrl, start, end, masterM3u8
    let cookieres = await cookieManager.setCookie(
      id,
      response.headers.get("set-cookie"),
      channelUrl,
      start,
      end,
      m3u8Parser(m3u8ChUrl, await response.text(), id, start, end)
    );

    console.log("cookieres", cookieres);

    return {
      status: true,
      data: cookieres["m3u8"],
    };
  } catch (error) {
    console.log("f: " + error.message);
    return {
      status: false,
      data: error.message,
    };
  }
}


async function getMasterM3u8(id, start, end) {
  let m3u8 = await cookieManager.getM3u8(id, start, end);
  console.log("m3u8m3u8m3u8m3u8m3u8m3u8", m3u8);
    if (!m3u8.success) {
        return await genM3u8(id, start, end);
    }
    return m3u8;
}

async function getLiveM3u8(url, vbegin, vend, cookie) {
  try {
    const userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );
    var options = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "User-Agent": "plaYtv/7.0.8 (Linux;Android 9) ExoPlayerLib/2.11.7",
        cookie: cookie,
        crmid: userDataJiotv["sessionAttributes"]["user"]["subscriberId"],
        deviceId: "3c6d6b5702fa09bd",
        devicetype: "phone",
        os: "Android",
        osVersion: "9",
        ssotoken: userDataJiotv["ssoToken"],
        uniqueId: userDataJiotv["sessionAttributes"]["user"]["unique"],
        userId: userDataJiotv["sessionAttributes"]["user"]["uid"],
        usergroup: "tvYR7NSNn7rymo3F",
        versionCode: "226",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
      },
    };
    let response = await fetch(`${url}?vbegin=${vbegin}&vend=${vend}`, options);
    let baseurl = url.split("/");
    baseurl[baseurl.length - 1] = "";
    baseurl = baseurl.join("/");
    if (response.status == 403) {
      let res = {
      success: false,
      m3u8: "",
    };
    return res;
    }
    let res = {
      success: true,
      m3u8: await response.text(),
    };
    return res;
  } catch (error) {
    console.error(error);
    let res = {
      success: false,
      m3u8: "",
    };
    return res;
  }
    
}

export async function getM3u8(id, start, end, m3u8, vbegin, vend) {
  let resss = await cookieManager.getCookie(id, start, end);
  jdebug("resss: ", resss["success"]);
  jdebug("resss: ", resss["data"]);
  if (resss.success == false) {
    await genM3u8(id, start, end);
    return "newGen";
  }

  let livem3u = await getLiveM3u8(m3u8, vbegin, vend, resss.data);
  jdebug("livem3u: ", livem3u['m3u8']);
  if (livem3u.success) {
    // let temptime = Date.now();
    return m3u8Parser(m3u8, livem3u.m3u8, id, start, end);
    jdebug((new Date() - temptime) / 1000);
  } else {
    await genM3u8(id);
    return "newGen";
  }
}

export let getManifist = getMasterM3u8; 
export default {
  getManifist: getMasterM3u8,
  getM3u8: getM3u8,
  genM3u8: genM3u8,
};