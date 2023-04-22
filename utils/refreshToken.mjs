import fetch from "node-fetch";
import fs from "fs";
var options = {
  method: "POST",
  headers: {
    devicetype: "phone",
    versionCode: "290",
    os: "android",
    Connection: "close",
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": "108",
    Host: "auth.media.jio.com",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/4.2.2",
  }
};

export default async function genNewAccessToken() {
  try {
    let userDataJiotv = JSON["parse"](
      fs["readFileSync"]("tokenData.jiotv", { encoding: "utf8", flag: "r" })
    );
    options["body"] = JSON.stringify({
      appName: "RJIL_JioTV",
      deviceId: "3c6d6b5702fa09bd",
      refreshToken: userDataJiotv["refreshToken"],
    });
    let response = await fetch(
      "https://auth.media.jio.com/tokenservice/apis/v1/refreshtoken?langId=6",
      options
    );
    let res = JSON.parse(await response.text());
    if (res["authToken"]) {
      userDataJiotv["authToken"] = res.authToken;
      fs["writeFileSync"](
        "./tokenData.jiotv",
        JSON["stringify"](userDataJiotv)
      );
    } else {
      return {
        success: true,
        message: "Token expire login again.",
      };
    }
    return {
      success: true,
      message: "AuthToken Genrated",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

// module.exports = genNewAccessToken;
