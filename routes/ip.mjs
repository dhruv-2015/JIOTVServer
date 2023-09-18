import express from "express";
import fetch from "node-fetch";
import os from "node:os";
const router = express.Router();
const isDebug = process.env.DHRUV_JTV_DEBUG === "true";

router.get("/debug", async (req, res) => {
  if (isDebug) {
    let ipDataRes = await fetch("http://ip-api.com/json");
    let ipDataServer = await ipDataRes.json();

    let networkInterfaces = os.networkInterfaces();
    // let ip = networkInterfaces["eth0"][0]["address"];
    res
      .type("json")
      .send(
        JSON.stringify(
          {
            // localIP: ip,
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
