var express = require("express");

var router = express.Router();

var db = require("../models/index.js");

app.get("/api/products", function(req, res) {
    connection.query("SELECT * FROM products;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
    });
  });
  module.exports = router;