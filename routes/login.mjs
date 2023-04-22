import express from "express";
const router = express.Router();
import fs from "fs";
import { sendOtp, login } from "../utils/login.mjs";

router.post("/login", async (req, res) => {
  const { mobile, otp } = req.body;
  // console.log(req.body);
  if (mobile != "" && otp == "") {
    let response = await sendOtp(mobile);
    if (response.success) {
      return res.redirect(`login.html?otpsent=${mobile}`);
    }
    console.log(response.message);
    res.redirect(`login.html?error=fail to send otp`);

  } else if (mobile != "" && otp != "") {
    let response = await login(mobile, otp);
    if (response.success) {
      return res.redirect("login.html?success=true");
    }
    console.log(response.message);
    res.redirect(`login.html?error=${response.message}`);
  } else {
    res.redirect("login.html");
  }
});

router.get("/login", (req, res) => {
  res.redirect("login.html");
});

router.get("/isLogin", (req, res) => {
  fs["existsSync"]("tokenData.jiotv")
    ? res.status(200)["send"]({ success: !![], result: !![] })
    : res.status(200)["send"]({ success: !![], result: ![] });
});


export default router;