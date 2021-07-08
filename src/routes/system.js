import express from "express";
import {NetwortkAddress} from "../services/STARTUP/index.js";



const systemInfo = {
nodeVersion: process.version,
ip:NetwortkAddress
}

const Systems = express.Router({});
Systems.get("/", (req, res) => {
    res.send(systemInfo);
});

Systems.post("/resetPassword", (req, res) => {
  res.send(["System 1"]);

});

Systems.put("/:System_id", (req, res) => {
  res.send(["System 1"]);
});

export default Systems;
