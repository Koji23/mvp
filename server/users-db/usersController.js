var usersModel = require('./usersModel.js');
 
module.exports.addUser = function(req, res, next) {
  usersModel.create(req.body, function(err, data){
    if(err) throw err;
    else{
      res.send(true);
    }
  });
};

module.exports.getUser = function(req, res, next) {
  // console.log(req.body);
  usersModel.find({username: req.body.username})
  .exec()
  .then(function(userData){
    // console.log('hello!!!!!!!', userData);
    if(req.body.password === userData[0].password){
      // console.log(true);
      res.send(true);
    } else {
      // console.log(false);
      res.send(false);
    }
  });

};