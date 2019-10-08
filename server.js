var express = require("express");
var path = require("path");
var session = require("express-session");
var passport = require("passport");
var app = express()
var PORT = process.env.PORT || 8080;
var mysql = require("mysql");
var mysql2 = require("mysql2");

app.use(express.static("public"));
app.use(session({secret: "keyboard cat" , resave: true, saveUninitialized:true})) //middleware for passport.js//
app.use(passport.initialize())
app.use(passport.session())


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});