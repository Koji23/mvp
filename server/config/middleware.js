var morgan = require('morgan')
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');



module.exports = function(app, express) {
  app.use(cors());
  app.use(morgan('dev'));  // :method :url :status :response-time ms - :res[content-length]
  app.use(function(req, res, next){
    // req.session.cookie.user = 'jordan';
    // console.log('_____before body parser_____', req.body);
    next();
  });
  // app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(function(req, res, next){
    // req.session.cookie.user = 'jordan';
    // console.log('_____after body parser_____', req.body);
    next();
  });
  app.use(session({
    secret: 'anyStringOfText',
    saveUninitialized: true,
    resave: true
  }));
  // app.use(function(req, res, next){
  //   // req.session.cookie.user = 'jordan';
  //   console.log('__________', req.session.cookie);
  //   next();
  // });
  app.use(express.static(__dirname + '/../../client'));

};




