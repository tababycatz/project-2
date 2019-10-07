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
    }}

module.exports = db;