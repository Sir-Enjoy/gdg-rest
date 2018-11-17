const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codelab', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
// attendee models lives here
var Attendees     = require('./attendees.js');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to GDG DevFest REST API!' });	
});

// everything goes here


//ends here

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

//tadan
app.listen(9000, function(){
    console.log('Listening on 9000')
})


