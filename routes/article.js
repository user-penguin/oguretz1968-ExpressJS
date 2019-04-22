var express = require('express')
var router = express.Router()
const Article = require('../modules/database/models/Article')
const Author = require('../modules/database/models/Author')

/* GET list of all posts */
router.get('/', function (req, res, next) {
  res.render('articles')
})

/* GET concrete article */
router.get('/:id', function (req, res) {
  var id = req.params.id
  var obj = {}
  res.render('article', { obj: obj })
})

/* ADD new article */
router.use('/add_new_article', async function (req, res) {
  let author = await Author.findOne({
    where: { Name: req.body.author }
  })
  await Article.create({
    Title: req.body.Title,
    Text1: req.body.Text1,
    Text2: req.body.Text2,
    AuthorId: parseInt(author.dataValues.id)
  }
  )
})

module.exports = router
