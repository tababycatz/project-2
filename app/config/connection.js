var mysql = require("mysql2");
require("dotenv").config()

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
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


// Export connection for our ORM to use.
module.exports = connection;