var express = require('express')
var router = express.Router()
const Author = require('../modules/database/models/Author')
const Article = require('../modules/database/models/Article')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
})

/* GET AuthorAdmins page */
router.get('/authorAdmin', async function (req, res, next) {
  let authorData = await Author.findAll({

  }).catch((err) => {
    console.log(err)
  })
  res.render('authorAdmin', { authors: authorData })
})

/* GET Article admin page */
router.get('/articleAdmin', async function (req, res, next) {
  let authors = await Author.findAll({

  })
    .catch((err) => {
      console.log(err)
    })
  let articleWithAuthors = await Article.findAll({
    include: [{ model: Author, as: 'Author' }]
  })
    .catch((err) => {
      console.log(err)
    })
  res.render('articleAdmin', {
    articleWithAuthor: articleWithAuthors,
    authors: authors
  })
})

module.exports = router
