var path = require("path")

var isAuthenticated = function( req, res, next) {
    if(req.user) {
        return next()
    }

    return res.redirect("/")
    
}

module.exports = function(app) {
    app.get("/",function( req, res) {
        if (req.user) {
            res.redirect("/members_home_Page")
        }

        res.sendFile(path.join(__dirname, "../public/home.html"))
        })

    app.get("/login", function(req, res) {
        if(req.user) {
            res.redirect("/login")
        }

        res.sendFile(path.join(__dirname, "./public/home.html"))
    })


    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "./public/members_home_page.html"))
    })

    
}