import express from "express";
import morgan from "morgan";
import api from "./api/index.js";
import pin from "./api/pin.js";
import topLangs from "./api/top-langs.js";
import wakatime from "./api/wakatime.js";
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
console.log(`Start self-host server for user: ${process.env.USER}`);
app.use(morgan("combined"));
function overwriteQuery(handler) {
  return (req, res) => {
    req.query.username = process.env.USER;
    return handler(req, res);
  };
}
app.get("/api", overwriteQuery(api));
app.get("/api/pin", overwriteQuery(pin));
app.get("/api/top-langs", overwriteQuery(topLangs));
app.get("/api/wakatime", overwriteQuery(wakatime));
app.listen(3000);
