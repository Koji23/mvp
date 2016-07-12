var usersModel = require('./usersModel.js');
 
module.exports.addUser = function(req, res, next) {
  
  usersModel.create(req.body, function(err, data){
    if(err) throw err;
    console.log(data);
  });
};

module.exports.getUser = function(req, res, next) {
  console.log(req.body);
};