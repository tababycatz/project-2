var connection = require("../config/connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  all: function(tableInput, cb) {
    var queryString = "SELECT ITEM_NAME,ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    select_food: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT SELECT ITEM_NAME,ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE  FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_toys: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_treats: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_clothing: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_Accessories: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
  //  
  
  // selectAndOrder: function(whatToSelect, table, orderCol) {
  //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
  // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString =
  //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
    // );
   }


module.exports = orm;
