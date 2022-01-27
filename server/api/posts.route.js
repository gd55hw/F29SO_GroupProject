import express from "express";

const router = express.Router();

// Default route
router.route("/").get((req, res) => res.send("Test"));

export default router;
