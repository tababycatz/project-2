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
router.get("/api/all_products", function(req, res) {
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
router.get("/api/toys", function(req, res) {
  db.select_toys("products", "CATEGORY", "TOYS",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/treats", function(req, res) {
  db.select_treats("products", "CATEGORY", "TREATS",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/clothing", function(req, res) {
  db.select_clothing("products", "CATEGORY", "CLOTHING",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
router.get("/api/accessories", function(req, res) {
  db.select_Accessories("products", "CATEGORY", "Accessories",
    function(result) {
    // Send back the ID of the new quote
    res.json({data: result});
  });
});
//****************you can add the whatever the name you call the arry**********************
// ............................................................................................
router.get("/api/orders", function(req, res) {
  res.json(arrayname);
});
 
router.post("/api/orders", function(req, res) {
  cat.create([
    "ORDER_ID ", "MEMBER_ID", "ITEM_ID", "ITEM_NAME", " QUANTITY", "PRICE", "TOTAL" 
  ], [
    arrayname.ORDER_ID, arrayname.MEMBER_ID, arrayname.ITEM_ID, arrayname.ITEM_NAME, arrayname.QUANTITY, arrayname.PRICE,arrayname.TOTAL
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ data: result});
  });
});

  module.exports = router;