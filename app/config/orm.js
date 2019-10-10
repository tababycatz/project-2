var connection = require("../config/connection");


// ....................................................................................
// need this code for print question marks
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
    
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
     
      arr.push(key + "=" + value);
    }
  }

 return arr.toString();
}

// .................................................................................
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
   
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
   

  
  
} ;


module.exports = orm;
