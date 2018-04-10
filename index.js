var con = require("./app/db_connect")
con.dbConnection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});