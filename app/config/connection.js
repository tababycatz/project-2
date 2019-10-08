var mysql = require("mysql");
var mysql2 = require("mysql2");
require("dotenv").config()
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
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    databse: "pawesome_db"
})
// Export connection for our ORM to use.
module.exports = connection;
Collapse


<<<<<<< HEAD
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "pawsome_DB"
});
=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc


