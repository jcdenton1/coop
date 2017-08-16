var geek = require("../models/geek");

var getAllGeeks = function(req, res) {
  geek.getAllGeeks(function(geeks) {
    res.send(geeks);
  })
};

var newGeek = function(req, res) {
  geek.newGeek().then(function() {
    res.send("ok");
  });
};

module.exports = {
  getAllGeeks: getAllGeeks,
  newGeek: newGeek
};