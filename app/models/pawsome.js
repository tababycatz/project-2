var orm = require("../config/orm");

var dog = {
  // The variables cols and vals are arrays.
  
  //create function for new users to user table//
  create: function(cols, vals, cb) {
    orm.create("dog", cols, vals, function(res) {
      cb(res);
    });
  },
  // update function to update orders table with newly selected items//
  update: function(objColVals, condition, cb) {
    orm.update("dog", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // delete function to remove all items out of the orders table when the purchase is completed //
  delete: function(condition, cb) {
    orm.delete("dog", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = dog;