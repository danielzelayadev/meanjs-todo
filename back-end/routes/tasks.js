var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Task = require('../models/Task');

router.get('/', (req, res, next) => {
  Task.find((err, tasks) => {
    if (err) return next(err);
    res.json(tasks);
  });
});

router.post('/', (req, res, next) => {
	Task.create(req.body, (err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/', (req, res, next) => {
	Task.findByIdAndUpdate(req.body._id, req.body, (err, post) => {
		if (err) return next(err);
    	res.json(post);
	});
});

module.exports = router;
