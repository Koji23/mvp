var express = require('express');
var middleware = require('./config/middleware');
var routes = require('./config/routes');
var mongoose = require('mongoose');

//
var app = express();

//mongo db setup
mongoose.connect('mongodb://localhost/noteTaker');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection opened!');
});

//server setup
middleware(app, express);
routes(app, express);

//
app.listen(3000, function(){
  console.log('listening on port 3000');
});