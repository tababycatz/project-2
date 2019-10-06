var express = require("express");
var session = require("express-session");
var passport = require("passport");
var app = express()
var PORT = process.env.PORT || 8080;
var mysql = require("mysql");
var mysql2 = require("mysql2");

app.use(express.static("public"));
// app.use(session({ secret: "keyboard cat" , resave: true, saveUninitialized}))
app.use(passport.initialize())
app.use(passport.session())

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("Listening on port %s. visit http//localhost:%s/")
})