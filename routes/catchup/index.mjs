import express from "express";
const router = express.Router();

import channelRoute from "./channel.mjs";

router.use("/", channelRoute);

export default router;

