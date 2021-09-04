const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "103.152.118.40",
    user: "root_glints",
    password: "todo_list1212@",
    database: "todolist"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("db connected!");
});

module.exports = conn;