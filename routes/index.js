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

router.get('/about/create_guest', function(req, res, next) {
	res.render('about_createguest', {title: 'About Us' });
});

router.get('/about/edit_guest', function(req, res, next) {
	res.render('about_editguest', {title: 'About Us' });
});

router.get('/about/delete_guest', function(req, res, next) {
	res.render('about_deleteguest', {title: 'About Us' });
});

router.get('/about/printing_reports', function(req, res, next) {
	res.render('about_printreport', {title: 'About Us' });
});

router.get('/about/room_availability', function(req, res, next) {
	res.render('about_roomavailability', {title: 'About Us' });
});

router.get('/about/staff_schedule', function(req, res, next) {
	res.render('about_staffschedule', {title: 'About Us' });
});

module.exports = router;