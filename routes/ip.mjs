import express from "express";
import fetch from "node-fetch";
import os from "node:os";
const router = express.Router();
const AUTH_KEY = process.env.AUTH_KEY || "141204";

router.get("/debug-ip", async (req, res) => {
  if (req.query.auth === AUTH_KEY) {
    let ipDataRes = await fetch("http://ip-api.com/json");
    let ipDataServer = await ipDataRes.json();

    let networkInterfaces = os.networkInterfaces();
    let ip = networkInterfaces["eth0"][0]["address"];
    res
      .type("json")
      .send(
        JSON.stringify(
          {
            localIP: ip,
            ipDataServer: ipDataServer,
            networkInterfaces: networkInterfaces,
          },
          null,
          2
        )
      );
  } else {
    res.sendStatus(400);
  }
});

export default router;
