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

<<<<<<< HEAD
// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./app/routes/apiRoutes.js");


app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
module.exports = app;
=======
// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
