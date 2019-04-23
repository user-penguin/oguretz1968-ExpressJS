var express = require('express')
var router = express.Router()
const Article = require('../modules/database/models/Article')
const Author = require('../modules/database/models/Author')

/* GET list of all posts */
router.get('/', function (req, res, next) {
  res.render('articles')
})

/* GET concrete article */
// router.get('/:id', function (req, res) {
//   var id = req.params.id
//   var obj = {}
//   res.render('article', { obj: obj })
// })

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
  res.redirect('/articleAdmin')
})

/* DELETE article */
router.use('/delete_article/:id', async function (req, res) {
  var id = req.params.id
  await Article.destroy({
    where: {
      id: id
    }
  })
  res.redirect('/articleAdmin')
})

/* EDIT article */
router.use('/edit_article', async function (req, res) {
  var id = parseInt(req.body.idArticle)
  await Article.update({
    Title: req.body.editTitle,
    Text1: req.body.editText1,
    Text2: req.body.editText2
  },
  {
    where: {
      id: id
    }
  })
  res.redirect('/articleAdmin')
})
module.exports = router
