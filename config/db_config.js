const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "xxx",
    user: "xxx",
    password: "xxx",
    database: "xxx"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("db connected!");
});

module.exports = conn;
