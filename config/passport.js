import passport from "passport";
import Local from "passport-local";
import {logInUser} from '../src/services/users.js'
import {User} from '../src/models/users.js'

passport.use(
  new Local.Strategy(async (username, password, done) => {
    try {
      const user = await logInUser({ username, password });

      if (!user) {
        return done(null, false, { message: "Incorrect username or password" });
      }

      // Save logged in user to Session:
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// From database to Session Storage after logged in
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// From Session Storage get userId to find user in database 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});