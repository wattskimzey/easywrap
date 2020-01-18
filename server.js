require("dotenv").config();
// Dependancies
var express = require("express");
var mongoose = require("mongoose");
var session = require('express-session');
var passport = require("passport");
var db = require("./models");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var path = require("path");
var routes = require("./routes");

// Server
var app = express();
var http = require("http").createServer(app);
var PORT = process.env.PORT || 3001;

// Parse request body as JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Session config
app.use(session({
  secret: "NotSoSecretSecret",
  resave: false,
  saveUninitialized: false
}));

// Passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("react-app/build"));
}

// Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:Luvisrage2@ds239967.mlab.com:39967/heroku_0qvnxppl";
mongoose.connect(MONGODB_URI);

// Routes ***
// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./react-app/public/index.html"));
});

// Listener
http.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});