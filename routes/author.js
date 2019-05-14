var express = require('express')
var router = express.Router()
const Author = require('../modules/database/models/Author')

/* GET all authors */
router.get('/', function (req, res) {
  var authors = Author.findAll({
  })
    .catch((err) => {
      console.log(err)
    })
  res.render('authors', { authors: authors })
})



// app.listen(4000)

// /* GET home page. */
// router.get('/:id', function (req, res, next) {
//   var id = req.params.id
//   var biography = Author.findAll({
//     where: {
//       id: id
//     }
//   }).catch((err) => {
//     console.log(err)
//   })
//   res.render('author', { biography: biography })
// })

module.exports = router
