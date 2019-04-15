var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Authors */
router.get('/authors', function (req, res, next) {
  res.render('authors');
});


module.exports = router;
