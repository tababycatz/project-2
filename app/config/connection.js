var mysql = require("mysql");
var mysql2 = require("mysql2");
const Sequelize = require("sequelize");
require("dotenv").config();

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql2.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql2.createConnection({
        "port": 3306,
        "host": process.env.HOST,
        "user": process.env.USERID,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE
    })
}

connection.connect(function (err) {
    if(err) {
        console.log("error connecting " + err.stack)
        return;
    }

    console.log("connected as id: " + connection.threadID)
})

var connection2 = mysql.createConnection({
    "host2": process.env.host2,
    "port2": 3306,
    "user2": process.env.USER2,
    "password2": process.env.PASSWORD2,
    "databse2": process.env.DATABASE2
})

const sequelize = new Sequelize("products", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  });


// Export connection for our ORM to use.
module.exports = connection;