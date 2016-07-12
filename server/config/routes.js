var notesController = require('../notes-db/notesController.js');
var usersController = require('../users-db/usersController.js');

module.exports = function(app, express) {

  app.get('/notes', notesController.getAllNotes);

  app.post('/notes', notesController.addNote);

  app.post('/users/login', usersController.getUser); 

  app.post('/users/signup', usersController.addUser); 

};

