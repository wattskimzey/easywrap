const db = require("../models");
var passport = require("passport");

module.exports = {

    newUser: function(req, res) {
        db.User.register(new db.User({
            username: req.body.username
          }), req.body.password, function (err, user) {
            if (err) {
              console.log(err);
              return res.redirect("/signup");
            }
            passport.authenticate("local")(req, res, function () {
              // After success, redirect here
              res.redirect("/profile");
            })
          });
    },

    login: passport.authenticate("local", {
      successRedirect: "/profile",
      failureRedirect: "/login"
    }), function(req, res) {},

    logout: function(req, res) {
      // console.log("SUCCESS");
      req.logout();
      res.redirect("/");
    },

    getAuthStatus: function(req, res) {
      // res.json("SUCCESS");

      if (req.user) {
        res.json(req.user);
      } else {
        res.json("no user");
      }
    }
}