var express = require('express');
var example = express.Router();

// middleware that is specific to this router
example.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
example.get('/', function (req, res) {
  res.send('Example');
});
// define the about route
example.get('/about', function (req, res) {
  res.send('About Example');
});

module.exports = example;
