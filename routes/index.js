<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rebecca Morrison House' });
});

=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rebecca Morrison House' });
});

>>>>>>> 22d74ef065e1974640ebe4224400fbed8b18c5e9
module.exports = router;