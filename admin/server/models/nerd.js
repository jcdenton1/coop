var mongoose = require( 'mongoose' );

var nerdSchema = mongoose.Schema({
    name: String,
    hobby: String
});

var Nerd = mongoose.model('Nerd', nerdSchema, 'Nerd');

var getAllNerds = function(callback) {
    Nerd.find(function (err, nerds) {
        if (err) return console.error(err);
        callback(nerds);
    });
};

var newNerd = function() {
    var jc = new Nerd({ name: 'jc', hobby: 'aaa' });
    return jc.save();
};

module.exports = {
    getAllNerds: getAllNerds,
    newNerd: newNerd
};