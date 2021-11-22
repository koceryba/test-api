var express = require('express');
var router = express.Router();

var postgres = require('../components/database');

const db = postgres.db;

router.get('/', function(req, res, next) {
  let searchText = req.query.text;
  searchText ?
    db.any(`SELECT * FROM searchlist WHERE text LIKE '%${searchText}%' LIMIT 15`)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL puppies'
          });
      })
      .catch(function (err) {
        return next(err);
      }) :
    res.status(200)
      .json({
        status: 'success',
        data: [],
        message: 'Retrieved ALL puppies'
      });
})

module.exports = router;
