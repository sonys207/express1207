var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('tony feel tired');
});

router.get('/chi', function(req, res, next) {
  res.send('tony feel chi');
});
module.exports = router;
