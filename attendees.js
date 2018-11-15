var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AttendeesSchema   = new Schema({
	name: String,
    chapter: String,
    email: String
});

module.exports = mongoose.model('Attendees', AttendeesSchema);