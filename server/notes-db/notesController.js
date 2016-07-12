var notesModel = require('./notesModel.js');


module.exports.addNote = function(req, res, next) {
  console.log('///////////////', req.body);
  notesModel.create(req.body, function(err, data){
    if(err) throw err;
    console.log(data);
  });
};


module.exports.getAllNotes = function(req, res, next) {
 // console.log('-------------------------');
 notesModel.find({})
 .exec()
 .then(function(data){
    res.send(data);
  });

};

