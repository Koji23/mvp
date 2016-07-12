var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('Users', usersSchema);