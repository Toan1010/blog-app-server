import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import post from "./routers/post.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const URL = process.env.DATABASE_URL;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(cors());

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })

  .catch((err) => {
    console.log("err", err);
  });

app.use("/post", post);
