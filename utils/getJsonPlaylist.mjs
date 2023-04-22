import fetch from "node-fetch";
import fs from "fs";

export default async function genPlaylist() {
  try {
    let file;
    const options = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "User-Agent": "plaYtv/7.0.8 (Linux;Android 7.1.2) ExoPlayerLib/2.11.7",
      },
    };
    if (fs["existsSync"]("channels.jiotv")) {
      file = JSON.parse(
        fs["readFileSync"]("channels.jiotv", { encoding: "utf8", flag: "r" })
      );
    } else {
      let req = await fetch(
        "https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone",
        options
      );
      let response = JSON.parse(await req.text());
      response["genrateDate"] = new Date().getTime();
      file = response;
      fs["writeFileSync"]("./channels.jiotv", JSON.stringify(response));
    }
    if (new Date().getTime() - file["genrateDate"] > 21600000) {
      // 6 hours
      let req = await fetch(
        "https://jiotv.data.cdn.jio.com/apis/v1.4/getMobileChannelList/get/?os=android&devicetype=phone",
        options
      );
      let response = JSON.parse(await req.text());
      response["genrateDate"] = new Date().getTime();
      fs["writeFileSync"]("./channels.jiotv", JSON.stringify(response));
    }
    return file;
  } catch (error) {
    console.error(error);
    return "";
  }
}
