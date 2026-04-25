import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.json({
    message: "CRUD API is running 🚀",
    status: "OK",
  });
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log(`Server is running on port : ${PORT}`);
    console.log("DB Connected Succesfully");
    app.listen(PORT, () => {});
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", route);
