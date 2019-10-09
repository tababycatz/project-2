var express = require("express");

var router = express.Router();

var db = require("../models/index.js");

// app.get("/api/products", function(req, res) {
//     connection.query("SELECT * FROM products;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       res.json(data);
//     });
//   });
router.get("/api/main", function(req, res) {
  db.all( 
    function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

  module.exports = router;