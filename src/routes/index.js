import express from "express";
import users from "./users.js";
import system from "./system.js";


const routes = express.Router({});

const HOST = process.env.HOST;

routes.get("/", (req, res) => {
  res.send("Hello API!");
  console.log(req.method + " on: " + req.protocol + "://" + HOST + req.originalUrl)
});

routes.use('/users', users)
routes.use('/system', system)


export default routes;