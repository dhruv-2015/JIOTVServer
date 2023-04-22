import express from "express";
import fs from "fs";
import fetch from "node-fetch";
const router = express.Router();
const port = process.env.PORT || 3500;

router.post("/ip", (req, res) => {
  if (req.body.ip == "") return res.redirect("admin.html?error=ip not dound");
  let ip = req.body.ip;
  fs["writeFileSync"]("./ipData.jiotv", ip);
  res.redirect("login.html?ipset=" + ip);
});

router.get("/ip", async (req, res) => {
  // console.log(req.originalUrl);
  if (req.query.type == "getServerIp" && req.query.auth == "141204") {
    let ipData = await fetch("http://ip-api.com/json");
    return res.send(await ipData.json());
  }
  let ipdata;
  if (fs["existsSync"]("ipData.jiotv")) {
    ipdata = fs["readFileSync"]("ipData.jiotv", {
      encoding: "utf8",
      flag: "r",
    });
  } else {
    ipdata = "127.0.0.1";
  }
  res.status(200).send({ ip: ipdata, port: port });
});


export default router;