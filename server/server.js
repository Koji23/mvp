var express = require('express');
var middleware = require('./config/middleware');
var routes = require('./config/routes');

var app = express();

middleware(app, express);
routes(app, express);

app.listen(3000, function(){
  console.log('Listening on port 3000');
});