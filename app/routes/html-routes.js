var path = ("path")

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

        res.sendFile(path.join(__dirname, "../public/signup.html"))
        })

    app.get("/login", function(req, res) {
        if(req.user) {
            res.redirect("/members_home_page")
        }

        res.sendFile(path.join(__dirname, "../public/members_home_page.html"))
    })


    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/members_home_page.html"))
    })

    
}