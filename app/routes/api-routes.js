var passport = require("../config/passport")
var path = require("path");

module.exports = function(app) {
    function auth (req, res, next, authMethod) {
        passport.authenticate(authMethod, function(err, user, info){
            if(err) {
                res.status(500)
                res.json(err)
            }
            if(!user) {
                res.status(401)
                res.json(info.message)
            }
            else {
                req.logIn(user , function(err) {
                    if(err) {return next(err)}
                    res.status(200)
                    res.json("/members_home_page")
                })
            }
        }) (req, res)
    }
    app.post("api/login", function( req, res, next) {
        auth(req, res, next, "local-signup")
        
    })
    app.get("/logout", function(req, res) {
        req.logout()
        res.redirect("/")
    })
    app.get("/api/user_data", function(req, res) {
        if(!req.user) {
            res.redirect("/")
        }
        else{
            res.json({
                email:req.user.email,
                id: req.user.id
            })
        }
    }) 
}
// ============================================== //

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })
    app.post("/api/friends", function(req, res){
        
        var friendMatch = {
            matchName: "",
            matchPic: "",
            totalDifference: 1000
        }
        var newFriend = req.body;
        var friendAnswer = newFriend.scores;
        var friendDifference = 0;

        for (let i = 0; i < friendsData.length; i++) {
            friendDifference = 0;
            for (let j = 0; j < friendAnswer.length; j++) {
                friendDifference += Math.abs(parseInt(newFriend[i].scores[j]) - parseInt(friendAnswer[j]));
            }
            if (friendDifference <= friendMatch.totalDifference) {
                totalDifference = diff;
                friendMatch.matchName = friendsData[i].name;
                friendMatch.matchPic = friendsData[i].photo;
                friendMatch.totalDifference = friendDifference;
            }
        };

        friendsData.push(newFriend);
        res.json({friendMatch});
    })
};