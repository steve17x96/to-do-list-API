const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employees"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("db connected!");
});

module.exports = conn;
