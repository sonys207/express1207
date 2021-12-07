var express = require('express');
var router = express.Router();
var homeController = require('../Controllers/indexControllers');

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });
 // router.get('/', function(req, res, next) {
// // res.sendFile('index.html', {root: './views'});
  // const blogArray=[
   // {title:'yoshi finds eggs',snippet:'zousifang'},
   // {title:'yo2',snippet:'zousifang2'},
   // {title:'yo3',snippet:'zousifang33'},
   // ];
   // res.render('index',{tonytest:'1234567',blogs:blogArray});	 
 // });
 console.log(1207);
  console.log(homeController.bike.brand);
router.get('/', homeController.homepage_index);
module.exports = router;
