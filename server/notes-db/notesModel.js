var mongoose = require('mongoose');


var notesSchema = mongoose.Schema({
    username: String,
    note: String
});



module.exports = mongoose.model('Notes', notesSchema)