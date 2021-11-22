var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var postgres = require('./components/database');

var search = require('./routes/search');

var app = express();

try {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  postgres.init();
  
  app.use('/api/v1/search', search);
} catch (e) {
  console.log("Main err", e);
}

module.exports = app;
