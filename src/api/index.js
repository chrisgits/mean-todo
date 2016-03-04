// api module
'use strict';

var express = require('express');

var router = express.Router(); //creates router method for all routes

router.get('/todos', function (req, res) {
  res.json({todos: []});
});

// TODO: ADD POST route to create new entries
// TODO: Add PUT route to update uxisting entries
// TODO: Add DELETE route to delete entries

module.exports = router;