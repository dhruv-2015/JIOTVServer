import { JsonDB }from "node-json-db";
import { Config }from "node-json-db/dist/lib/JsonDBConfig.js";
import fs from 'fs';

const db = new JsonDB(new Config("channel-catchup.db", true, false, "/"));

// function init() {
//   if (condition) {
    
//   }
// }

async function setCookie(id, cookie, masterUrl, start, end, masterM3u8) {
    let uri = masterUrl.split("?");
    let data = {}
    // uri[0] = uri[0].replace(
    //   "https://jiotvmblive.cdn.jio.com",
    //   "/jiotvmblive.cdn.jio.com"
    // );
  data["url"] = uri[0];
  data['start'] = start;
  data["end"] = end;
    data["slug"] = uri[1];
    data["mainUrl"] = masterUrl;
    data["cookie"] = cookie;
    data["genrateTime"] = Date.now();
    data["m3u8"] = masterM3u8;
  await db.push("/channel/" + `${id}-${start}-${end}`, data);
  return data;
}

export async function getCookie(id, start, end) {
  let data = await db.getData("/channel");
  // console.log(data[`${id}-${start}-${end}`]);
  if (data[`${id}-${start}-${end}`] != undefined) {
    let velidTime = 60 * 60 * 20 * 1000;
    if (Date.now() - new Date(data[`${id}-${start}-${end}`]["genrateTime"]) > velidTime) {
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
  let cookie = data[`${id}-${start}-${end}`]["cookie"];
  return {
    success: true,
    data: cookie,
  };
}

async function getUrl(id, start, end) {
    let data = await db.getData("/channel");
    let url = data[`${id}-${start}-${end}`]["url"] || "undefined";
    return {
      success: url != "undefined",
      data: url,
    };
}

async function getM3u8(id, start, end) {
  let data = await db.getData("/channel") || {};
    
    if (data[`${id}-${start}-${end}`] != undefined) {
      let velidTime = 60 * 60 * 20 * 1000;
      if (
        Date.now() - new Date(data[`${id}-${start}-${end}`]["genrateTime"]) >
        velidTime
      ) {
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
  let m3u8 = data[`${id}-${start}-${end}`]["m3u8"] || "undefined";
    return {
      success: m3u8 != "undefined",
      data: m3u8,
    };
}


export default {
  setCookie,
  getCookie,
  getUrl,
  getM3u8
};
