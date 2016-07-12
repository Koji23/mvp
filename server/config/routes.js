

module.exports = function(app, express) {

  app.get('/notes', function(req, res){
    console.log('heard get for note!@!!!!!!');
  });

  app.post('/notes', function(req, res){
    console.log('heard post for note!!!!!!!!!!');
  });

};