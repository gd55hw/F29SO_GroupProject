import express from "express";
import cors from "cors";
import posts from "./api/posts.route.js";

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/posts", posts);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));  // Unknown route


export default app
