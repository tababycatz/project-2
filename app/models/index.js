"use strict";

var fs = require("fs");
var path = require("path");
var mysql = require("mysql")
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var db = {};



module.exports = db;
