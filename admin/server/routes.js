var controllers = require("./controllers");

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile('index.html');
  });

  app.get('/nerds', function(req, res) {
    controllers.nerd.getAllNerds(req, res);
	});

  app.get('/new_nerd', function(req, res) {
    controllers.nerd.newNerd(req, res);
  });

  app.get('/geeks', function(req, res) {
    controllers.geek.getAllGeeks(req, res);
  });

  app.get('/new_nerd', function(req, res) {
    controllers.geek.newGeek(req, res);
  });

};