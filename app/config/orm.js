var connection = require("../config/connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  all: function(tableInput, cb) {
    var queryString = "SELECT ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    select_food: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE  FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_toys: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_treats: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_clothing: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_NAME,ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },
   select_Accessories: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ITEM_DESCRIPTION,PRICE,ITEM_IMAGE FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
   },

   insert: function(table, objColVals, condition, cb) {
    var queryString = "INSERT INTO orders " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
   
   

  
  
} ;


module.exports = orm;
