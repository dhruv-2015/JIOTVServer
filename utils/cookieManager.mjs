import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig.js";
import fs from 'fs';

const db = new JsonDB(new Config("channel.db", true, false, "/"));

export async function setCookie(id, cookie, masterUrl, masterM3u8) {
    let uri = masterUrl.split("?");
    let data = {}
    // uri[0] = uri[0].replace(
    //   "https://jiotvmblive.cdn.jio.com",
    //   "/jiotvmblive.cdn.jio.com"
    // );
    data["url"] = uri[0];
    data["slug"] = uri[1];
    data["mainUrl"] = masterUrl;
    data["cookie"] = cookie;
    data["genrateTime"] = Date.now();
    data["m3u8"] = masterM3u8;
  await db.push("/channel/" + id, data);
  return data;
}

export async function getCookie(id) {
    let data = await db.getData("/channel");
  
  if (data[id] != undefined) {
    let velidTime = 60 * 60 * 20 * 1000;
    if (Date.now() - new Date(data[id]["genrateTime"]) > velidTime) {
      return {
        success: false,
        data: "cookie expire",
      };
    }
  } else {
    return {
      success: false,
      data: "undefined",
    };
  }
  let cookie = data[id]["cookie"] || "undefined";
    return {
      success: true,
      data: cookie,
    };
}

export async function getUrl(id) {
    let data = await db.getData("/channel");
    let url = data[id]["url"] || "undefined";
    return {
      success: url != "undefined",
      data: url,
    };
}

export async function getM3u8(id) {
  let data = await db.getData("/channel") || {};
    
    if (data[id] != undefined) {
      let velidTime = 60 * 60 * 20 * 1000;
      if (Date.now() - new Date(data[id]["genrateTime"]) > velidTime) {
        return {
          success: false,
          data: "cookie expire",
        };
      }
    } else {
      return {
        success: false,
        data: "undefined",
      };
    }
  let m3u8 = data[id]["m3u8"] || "undefined";
    return {
      success: m3u8 != "undefined",
      data: m3u8,
    };
}

export async function getAll(id) {
  let data = await db.getData("/channel");
  if (id == "all") {
    return data;
  } else {
    return data[id] || "undefined";
  }
}

export default {
  setCookie,
  getCookie,
  getUrl,
  getM3u8,
  getAll,
};
