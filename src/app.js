'use strict';

var express = require('express');
var router = require('./api')

var app = express(); //creates express function variable 'app'

require('./database');

app.use('/', express.static('public')); //serves static files 'public' using .use method

app.use('/api', router);
//mount router to app using .use method here (creates base route to api files using /api url)

app.listen(3000, function () {
  console.log("The server is running on port 3000!");
});
