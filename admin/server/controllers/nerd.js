var nerd = require("../models/nerd");

var getAllNerds = function(req, res) {
  nerd.getAllNerds(function(nerds) {
    res.send(nerds);
  })
};

var newNerd = function(req, res) {
  nerd.newNerd().then(function() {
    res.send("ok");
  });
};

module.exports = {
  getAllNerds: getAllNerds,
  newNerd: newNerd
};