
import fetch from "node-fetch";
import fs from "fs";
let options = {
  method: "POST",
  headers: {
    devicetype: "phone",
    appname: "RJIL_JioTV",
    os: "android",
    "Content-Type": "application/json",
    Host: "jiotvapi.media.jio.com",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/4.2.2",
  },
};
export async function sendOtp(mobile) {
  try {
    let base64mobile = Buffer.from("+91" + mobile).toString("base64");
    options["body"] = JSON.stringify({ number: base64mobile });
    await fetch(
      "https://jiotvapi.media.jio.com/userservice/apis/v1/loginotp/send",
      options
    );
    return { success: true, message: "otp send" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function login(mobile, otp) {
  try {
      let base64mobile = Buffer.from("+91" + mobile).toString("base64");
        options["body"] = JSON.stringify({
          deviceInfo: {
            consumptionDeviceName: "SM-G935FD",
            info: {
              platform: { name: "SM-G935FD" },
              androidId: "3c6d6b5702fa09bd",
              type: "android",
            },
          },
          otp: otp,
          number: base64mobile,
        });
        let r = await fetch(
          "https://jiotvapi.media.jio.com/userservice/apis/v1/loginotp/verify",
          options
        );
        let data = JSON.parse(await r.text());
        if (r.status == 400) {
          return { success: false, message: data.message };
        }
        fs["writeFileSync"]("./tokenData.jiotv", JSON["stringify"](data));
        return { success: true, message: "login success" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}
