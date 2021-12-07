var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log(req.body.email);
    console.log(req.body.password);
  res.render('users');
});

router.get('/', function(req, res, next) {
		console.log('12-1');
   // console.log(req.query.password);
  res.render('users',{userj:"tony1234"});
 // const blogArray=[
   // {title:'yoshi 1207',snippet:'zousifang'},
   // {title:'yo1206',snippet:'zousifang2'},
   // {title:'yo3',snippet:'zousifang33'},
   // ];
 // res.render('index',{tonytest:'1234567',blogs:blogArray});
});
module.exports = router;
