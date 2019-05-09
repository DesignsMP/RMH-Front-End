var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rebecca Morrison House' });
});

router.get('/about', function(req, res, next) {
	res.render('about', {title: 'About Us' });
});

router.get('/contact', function(req, res, next) {
	res.render('contact', {title: 'Our Staff' });
});


router.get('/reports', function(req, res, next) {
	res.render('reports',{title:'Reports'});
});

module.exports = router;