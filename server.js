var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./app/config/passport");

var PORT = process.env.PORT || 8080;

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "pawsome" , resave: true, saveUninitialized: false}))
app.use(passport.initialize())
app.use(passport.session())

require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("Listening on port " + PORT+ " visit http://localhost:"+ PORT+ "/")
})