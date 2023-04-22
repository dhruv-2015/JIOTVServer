import fetch from "node-fetch";
import m3u8Parser from "./m3u8Parser.mjs";
import fs from "fs";
import refreshtoken from "./refreshToken.mjs";

import cookieManager from "./cookieManager.mjs"

async function getUrl(id, retry = 0) {
  try {
    if (retry > 5) {
      return "";
    }
    let userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );
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
      body: `stream_type=Seek&channel_id=${id}`,
    };
    let response = await fetch(
      "https://jiotvapi.media.jio.com/playback/apis/v1/geturl?langId=6",
      options
    );
    if (response.status == 419) {
      // AuthToken Expire so gen new
      let ref = await refreshtoken();
      // console.log(ref);
      if (ref.success) {
        console.log(ref.message);
        getUrl(id, retry + 1);
      } else {
        console.log(ref.message);
        return "";
      }
    }
    let data = JSON.parse(await response.text());
    return data["result"];
  } catch (e) {
    console.log(e.message);
    return "";
  }
}

export async function genM3u8(id) {
  try {
    let channelUrl = await getUrl(id);
    if (channelUrl == "") {
      return {
        url: "",
        id: id,
        m3u8: "",
      };
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
    let m3u8ChUrl = channelUrl.split("?");
    m3u8ChUrl = m3u8ChUrl[0];
      let cookieres = await cookieManager.setCookie(
        id,
        response.headers.get("set-cookie"),
        channelUrl,
        m3u8Parser(m3u8ChUrl, await response.text(), id)
    );
    
    return cookieres['m3u8'];
  } catch (error) {
    console.log("f: " + error.message);
    return ""
  }
}


export let getManifist = async function getMasterM3u8(id) {
  let m3u8 = await cookieManager.getM3u8(id);
    if (!m3u8.success) {
        return await genM3u8(id);
    }
    return m3u8;
}

async function getLiveM3u8(url, cookie) {
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
    let response = await fetch(
      `https://smumcdnems01.cdnsrv.jio.com${url}`,
      options
    );
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

export async function getM3u8(url, id) {
  let resss = await cookieManager.getCookie(id);
  // console.log("resss: " + resss["success"]);
  // console.log("resss: " + resss["data"]);
  if (resss.success == false) {
    await genM3u8(id);
    return "newGen";
  }

  let livem3u = await getLiveM3u8(url, resss.data);
  // console.log("livem3u: " + livem3u['m3u8']);
  if (livem3u.success) {
        return m3u8Parser(url, livem3u.m3u8, id);
    } else {
        await genM3u8(id);
        return "newGen";
    }

}

