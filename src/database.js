'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
    if(err) {
        console.log("Error connecting to Mongodb");
    } else {
      console.log("Success! Connected to Mongodb");
    }
});
