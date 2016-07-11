var express = require('express');
// var middleware = require('./config/middleware');
// var routes = require('./config/routes');

var app = express();

require('./config/middleware')(app, express);
require('./config/routes')(app, express);

app.listen(3000, function(){
  console.log('listening on port 3000');
});