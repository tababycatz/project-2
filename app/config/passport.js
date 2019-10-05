var passport = require("passport");
var localStrategy = require("passport-local").Strategy;

var bcrypt = require("bcrypt-node.js");
var model = require("../models/users")

passport.use(
    "local-login",
    new localStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },
    function(req , username, password, done) {
        model.selectWhere("username" , username,function (err, rows) {
            if(err)
                return done(err);
            if(!rows.length) {
                return done (null, false, {message: "No user found!"})
            }
            
            if(bcrypt.compareSync(password, rows[0].password))
            return done(null , false, {message: "Ooops Wrong password!."})


            return done(null, rows[0])
    
        })
    })
)


passport.use(
    "local-signup",
    new localStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },
    function (req, username, password, done) {
        model.selectWhere("username", username, function (err, rows) {
            if (err)
                return done(err);
            if (rows.length) {
                return done (null, false, {message: "That username is already taken!"})

            } else {
                var newUser = {
                    username: username,
                    password: bcrypt.hashSync(password, null, null)
                }

                model.create({ "username": newUser.username, "password": newUser.password}, function(err, rows) {
                    newUser.id = rows.insertId

                    return done(null, newUser)
                    
                })
            }
        })
        
    })
)

passport.serializeUser(function(user, done) {
    done(null,user.id)
    
})

passport.deserializeUser(function(id, done) {
    model.selectWhere("id", id, function (err, rows){
        done(err, rows[0])
        
    })
    
})


module.exports = passport