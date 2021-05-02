var express = require('express');
var router = express.Router();


router.get('/okk', function(req, res, next) {
  res.status(200).json({
    name:[ "onkar", "Ayush", "Aish", "Kuber" ]
  })
});

module.exports = router;
