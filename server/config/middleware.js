var morgan = require('morgan')
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(morgan('dev'));  // :method :url :status :response-time ms - :res[content-length]
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));


};




