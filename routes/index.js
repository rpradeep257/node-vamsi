var express = require('express');
var router = express.Router();

var json_data = {
  "max" : 10,
  "min" : 5
}

// Endpoint returning JSON data
router.get('/', function(req, res, next) {
  res.json(json_data);
});

module.exports = router;
