import express from "express";
import { getStats } from "../Controllers/statsController.js";

const router = express.Router();

router.route("/").get(getStats);

export default router;
