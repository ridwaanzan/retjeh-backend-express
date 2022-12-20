import express from "express";
import apiRouter from "./routes/api.js";
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/v1", apiRouter);
app.use((req, res) => {
  res.status("404").json({
    isSuccess: false,
    message: "404 Not Found",
  });
});

mongoose.connect("mongodb://localhost:27017", {
  dbName: "backend_express_try",
});
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "Connection error"));
conn.once("open", () => {
  console.log("db connected");
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
