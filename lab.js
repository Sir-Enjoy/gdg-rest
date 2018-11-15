// on routes that end in /attend
// ----------------------------------------------------
router.route('/devfest')

	// create a bear (accessed at POST http://localhost:8080/devfest)
	.post(function(req, res) {
		
		var attendee = new Attendee();		// create a new instance of the Bear model
		attendee.name = req.body.name;  // set the bears name (comes from the request)
        attendee.chapter = req.body.chapter;
        attendee.email = req.body.email;

		bear.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Ticket created!' });
		});
	})

	// get all the tickets (accessed at GET http://localhost:8080/api/devfest)
	.get(function(req, res) {
		Attendees.find(function(err, attendee) {
			if (err)
				res.send(err);

			res.json({attendee});
		});
	});

// on routes that end in /devfest/:_id
// ----------------------------------------------------
router.route('/devfest/:_id')

	// get the ticket with that id
	.get(function(req, res) {
		Attendees.findById(req.params._id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the ticket with this id
	.put(function(req, res) {
		Attendees.findById(req.params.att_id, function(err, attendee) {

			if (err)
				res.send(err);

			attendee.name = req.body.name;
            attendee.chapter = req.body.chapter;
            attendee.email = req.body.email;
			attendee.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Ticket updated!'});
			});

		});
	})

	// delete the ticket with this id
	.delete(function(req, res) {
		Attendees.remove({
			_id: req.params.att_id
		}, function(err, attendee) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
