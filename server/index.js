import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoute from "./routes/posts.js";
import userRoute from "./routes/users.js";

const app = express();
dotenv.config();
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Welcome to memories API");
});

app.use("/posts", postRoute);
app.use("/user", userRoute);

mongoose.connect(process.env.CONNECT_URL);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
