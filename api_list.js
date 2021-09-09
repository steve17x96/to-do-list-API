var db_conn = require('./config/db_config');

var List = function(list){
    this.activity = list.activity;
    this.photo = list.photo;
    this.date = list.date;
    this.status = list.status;
    this.createdate = new Date();
};

List.create_list = function (newList, result){
    db_conn.query("INSERT INTO list set activity = ?", newList, function (err, res) {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

List.findById_list = function (id, result){
    db_conn.query("SELECT * FROM list where listID = ?",id ,function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

List.getAll = function (result){
    db_conn.query("SELECT * FROM list", function(err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log("list: ", res);
            result(null, res);
        }
    });
};

List.updateByID = function(id, list, result){
    db_conn.query("UPDATE list SET activity = ?, photo = ?, date = ?, status = ? WHERE listID = ?",
    [list.activity, list.photo , list.date, list.status, id], function(err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

List.delete_list = function(id, result){
    db_conn.query("DELETE FROM list WHERE listID = ?", id, function(err,res){
        if(err){
            console.log("error: ",err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = List;