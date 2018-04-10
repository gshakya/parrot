var mysql = require("mysql");
var config = require("config")
const connection = require("config").get("dbConfig.local");

var dbConnection = mysql.createConnection({
    host: connection.host,
    user: connection.user,
    password : connection.password
});

exports.dbConnection = dbConnection;