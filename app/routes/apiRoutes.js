var express = require("express");
var router = express.Router();
var db = require("../models/index.js");
var cartArray = require("../data/orders")
// app.get("/api/products", function(req, res) {
//     connection.query("SELECT * FROM products;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       res.json(data);
//     });
//   });
module.exports = function(app) {
  app.get("/api/orders", function (req, res) {
    res.json(cartArray);
})
app.post("/api/orders", function(req, res){
    var cartItems = {
      item: "",
      price: "",
      qty: ""
    }
    
    var cartStuff = req.body;
    for (let i = 0; i < cartArray.length; i++) {
        // if (friendDifference <= friendMatch.totalDifference) {
        //     totalDifference = diff;
        //     friendMatch.matchName = friendsData[i].name;
        //     friendMatch.matchPic = friendsData[i].photo;
        //     friendMatch.totalDifference = friendDifference;
        // }
    };
    cartArray.push(cartStuff);
    res.json(cartItems);
})
};
router.get("/api/main", function(req, res) {
  db.all( 
    function(result) {
    // Send back the ID of the new quote
    res.json({data:result});
  });
});
router.get("/api/food", function(req, res) {
  db.select_food("products", "CATEGORY", "food",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/", function(req, res) {
  db.select_toys("products", "CATEGORY", "TOYS",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/main", function(req, res) {
  db.select_treats("products", "CATEGORY", "TREATS",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/main", function(req, res) {
  db.select_clothing("products", "CATEGORY", "CLOTHING",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/main", function(req, res) {
  db.select_Accessories("products", "CATEGORY", "Accessories",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
  module.exports = router