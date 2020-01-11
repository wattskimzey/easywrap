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
}