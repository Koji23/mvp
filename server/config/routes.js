var notesController = require('../notes-db/notesController.js');

module.exports = function(app, express) {

  // console.log('!!!!!!!!!!!!!!!!!!!!!!', notesController.addNote);

  app.get('/notes', notesController.getAllNotes);

  app.post('/notes', notesController.addNote);

};

