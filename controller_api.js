const User = require('./api');

exports.create = function(req, res){
    const new_user = new User(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "fill all the required field"});
    }
    else{
        User.create(new_user, function(err, user){
            if(err) res.send(err);
            res.json({error: false, message:"Add successfully!", data:user});
        });
    }

    // if(!req.body){
    //     res.status(400).send({
    //         message: "empty!"
    //     });
    // }

    // const new_user = new User

};

exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err) res.send(err);
      res.json(user);
    });
};

exports.findAll = function(req, res) {
    User.findAll(function(err, user){
        console.log('controller');
        if(err){
            res.send(err);
        }
        console.log('res', user);
        res.send(user);
    });
};

exports.update = function (req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "fill all the required field"});
    }
    else{
        User.update(req.params.id, new User(req.body), function(err, user){
            if (err) res.send(err);
            res.json({error:false, message: "successfully updated!"});
        });
    }
};

exports.delete = function(req, res){
    User.delete(req.params.id, function(err, user){
        if(err) res.send(err);
        res.json({error: false, message: "successfully deleted!"});
    });
};