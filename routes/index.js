var express = require('express');
var router = express.Router();
const Author = require('../modules/database/models/Author');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Authors */
router.get('/authors', function (req, res, next) {
  res.render('authors');
});

/* GET AuthorAdmins page */
router.get('/authorAdmin', async function (req, res, next) {
  let authorData = await Author.findAll({

  }).catch((err)=>{
    console.log(err);
  });
  res.render('authorAdmin', {authors: authorData});
});


module.exports = router;
