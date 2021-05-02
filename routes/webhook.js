var express = require('express');
var router = express.Router();
var { unistallData } = require('./Controler/uninstall');


// webhook Api
router.post('/api/uninstall',unistallData);


module.exports = router;
