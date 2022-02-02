import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoute from "./routes/posts.js";

const app = express();
dotenv.config();
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Welcome to memories API");
});

app.use(cors());

app.use("/posts", postRoute);

mongoose.connect(process.env.CONNECT_URL);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
