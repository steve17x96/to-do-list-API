var db_conn = require('./config/db_config');

var Overtime = function(overtime){
    this.id = overtime.id;
    this.empid = overtime.empid;
    this.tgl = overtime.tgl;
    this.jamkerja = overtime.jamkerja;
    this.hasil = overtime.hasil;
    this.iscalculate = overtime.iscalculate;
    this.calculatedate = overtime.calculatedate;
};


Overtime.getOvertime = function (result){
    db_conn.query("SELECT * FROM overtime", function(err,res){
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

module.exports = Overtime;