var mongoose = require( 'mongoose' );

var geekSchema = mongoose.Schema({
  name: String,
  hobby: String
});

var Geek = mongoose.model('Geek', geekSchema, 'Geek');

var getAllGeeks = function(callback) {
  Geek.find(function (err, geeks) {
    if (err) return console.error(err);
    callback(geeks);
  });
};

var newGeek = function() {
  var jc = new Geek({ name: 'jc', hobby: 'aaa' });
  return jc.save();
};

module.exports = {
  getAllGeeks: getAllGeeks,
  newGeek: newGeek
};