var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/16', function(req, res, next) {
    res.render('author');
});

module.exports = router;