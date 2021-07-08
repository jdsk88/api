import express from "express";
import {
  registerUser,
  findUsers,
  logInUser,
  findUser,
  deleteUsers,
} from "../services/users.js";
import passport from "passport";
import { User } from "../models/users.js";
import  token  from "morgan";

const users = express.Router({});

users.get("/", async (req, res) => {
  const { limit, page } = req.query;
  const result = await findUsers({ limit, page });
  res.header("Access-Control-Allow-Origin", "*");

  res.send(result);
});
users.delete("/", async (req, res) => {
  const result = await deleteUsers();
  res.send(result);
});

users.get("/me", async (req, res) => {
  if (req.user) {
  res.send(await findUser({ id: req.user.id }),{token:"test123"});
  console.log(`user logged in: ${req.user.username} and id: ${req.user.id} and token ${token}`)
  }else{
  res.header("Access-Control-Allow-Origin", "*");
  res.send({error:'Not Logged in'})
  console.log(`user not logged in`)
  }
});


users.post('/register', (req, res, next) => {
  let query = req.body.username;
  User.findOne({username:query}, function(err, user){
      if(err) console.log(err);
      if ( user){
          console.log("This user has already been saved");
      } else {
          var user = new User(req.body);
          user.save(function(err, user) {
              if(err) console.log(err);
              console.log("New user profile created");
              res.redirect(`/api/users/me`);
          });
      }
  });
});

// => config/passport.js
users.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log(req.body)
  res.header("Access-Control-Allow-Origin", "*");

  res.redirect("/api/users/me"); // + req.user.username);
});

users.post("/confirmEmail", (req, res) => {
  res.send(["user 1"]);
});

users.post("/resetPassword", (req, res) => {
  res.send(["user 1"]);
});

users.get("/:user_id", (req, res) => {
    res.send(findUser({ id: req.user.id }));
});

users.put("/:user_id", (req, res) => {
  res.send(["user 1"]);
});

export default users;
