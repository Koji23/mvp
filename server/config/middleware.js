var morgan = require('morgan')


module.exports = function(app, express) {
  app.use(morgan('dev'));  // :method :url :status :response-time ms - :res[content-length]
};




