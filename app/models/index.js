"use strict";

var fs = require("fs");
var path = require("path");
var mysql = require("mysql")
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var orm = require("./config/orm.js");


// Call orm method, passing in the anonymous function(with "res") as the callback.

var db = {
    all: function(cb) {
      orm.all("products", function(res) {
        cb(res);
      });
    },
    select_food: function(cols, vals, cb) {
      orm.select_food("products", cols, vals, function(res) {
        cb(res);
      });
    },
    select_toys: function(cols, vals, cb) {
      orm.select_toys("products", cols, vals, function(res) {
        cb(res);
      });
    },
    select_treats: function(cols, vals, cb) {
      orm.select_treats("products", cols, vals, function(res) {
        cb(res);
      });
    },
    select_clothing: function(cols, vals, cb) {
      orm.select_clothing("products", cols, vals, function(res) {
        cb(res);
      });
    },
    select_Accessories: function(cols, vals, cb) {
      orm.select_Accessories("products", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("orders", objColVals, condition, function(res) {
        cb(res);
      });
    },
  }

module.exports = db;