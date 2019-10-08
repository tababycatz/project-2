var path = require("path");

var isAuthenticated = function(req, res, next) {
    if(req.user) {
        return next()
    }
    return res.redirect("/")
};

//get methods for the login - passport pages :: By Luis//
//NOTE:: members_home_page.html and signup.html are dummy pages//

module.exports = function(app) {
    // app.get("/",function( req, res) {
    //     if (req.user) {
    //         res.redirect("/../public/home.html")
    //     }
    //     res.sendFile(path.join(__dirname, "../public/signup.html"))
    //     });
    // app.get("/login", function(req, res) {
    //     if(req.user) {
    //         res.redirect("")
    //     }
    //     res.sendFile(path.join(__dirname, "../public/home.html"))
    // });
    // app.get("/members", isAuthenticated, function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/members_home_page.html"))
    // });

//get methods for all html pages//

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/categories", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/categories.html"));
    });
    
    app.get("/food", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/catone.html"));
    });

    app.get("/treats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/cattwo.html"));
    });

    app.get("/clothing", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/catthree.html"));
    });

    app.get("/accessories", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/catfour.html"));
    });

    app.get("/toys", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/catfive.html"));
    });

    app.get("/checkout", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/checkout.html"));
    });


};

