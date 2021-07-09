import express from "express";
import { NetwortkAddress } from "../services/startup/index.js";
import os from 'os';
import { terminalLOG__black, terminalLOG__error, terminalLOG__mint, terminalLOG__success, terminalLOG__warrning } from "../services/consolelog/console.js";
import { mailer } from "../services/mailer/index.js";

const systemInfo = {
  // allowedNodeEnvironmentFlags: process.allowedNodeEnvironmentFlags,
  // arch: process.arch,
  // argv: process.argv,
  // argv0: process.argv0,
  // process: process.chdir(),
  // config: process.config,
  // connected: process.connected,
  // debugPort: process.debugPort,
  // process: process.disconnect(),
  // domain: process.domain,
  // env: process.env,
  nodeVersion: process.version,
  cpuUsage: process.cpuUsage(),
  cwd: process.cwd(),
  ip: NetwortkAddress,
  osPlatform: os.platform(),
  osHost: os.hostname(),
  osIp: os.networkInterfaces().wlp2s0[0].address,
  memory: os.freemem(),
  totalmem: os.totalmem,
  osVersion: os.version(),
  userInfo: os.userInfo(),
  uptime: os.uptime(),
  type: os.type(),
  tmpdir: os.tmpdir(),
  release: os.release(),
  homedir: os.homedir(),
  endianness: os.endianness(),
  cpus: os.cpus()[0],
  arch: os.arch(),
  cpuCores: os.cpus().length
}

const Systems = express.Router({});

Systems.get("/", (req, res) => {
  res.json(systemInfo);
});

Systems.post("/msg", async (req, res) => {
  const {to,subject,html} = req.body;
  const result = [to,subject,html]
  terminalLOG__error(to)
  terminalLOG__error(subject)
  terminalLOG__error(html)
  mailer(to,subject,html)
  res.json(result);
});

export default Systems;
