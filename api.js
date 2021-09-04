var db_conn = require('./config/db_config');

var User = function(user){
    this.email = user.email;
    this.password = user.password;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.createdate = new Date();
    this.isblocked = user.isblocked ? user.isblocked : 1;
};

var List = function(list){
    this.activity = list.activity;
    this.Date = new Date();
    this.status = list.status;
};

User.create = function (newUsr, result){
    db_conn.query("INSERT INTO user set ?", newUsr, function (err, res) {
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

User.findById = function (id, result){
    db_conn.query("SELECT * FROM user where userID = ?",id ,function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.findAll = function (result){
    db_conn.query("SELECT * FROM user", function(err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log("users: ", res);
            result(null, res);
        }
    });
};

User.update = function(id, user, res){
    db_conn.query("UPDATE user SET email = ?, password = ?, username = ?, firstName = ?, lastName = ? WHERE userID = ?",
    [user.email, user.password, user.username ,user.firstName, user.lastName, id], function(err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

User.delete = function(id, result){
    db_conn.query("DELETE FROM user WHERE userID = ?", id, function(err,res){
        if(err){
            console.log("error: ",err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = User;