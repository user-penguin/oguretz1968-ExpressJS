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

/* Add new user */
router.post('/add_new_author', async function (req, res) {
  await Author.create({
    Name: req.body.name,
    SecName: req.body.secName,
    Email: req.body.email,
    Phone: req.body.phone,
    Ranking: req.body.ranking,
    Price: req.body.price,
    Mission: req.body.mission,
    MainText: req.body.mainText
  })
  var authors = await Author.findAll({
  })
    .catch((err) => {
      console.log(err)
    })
  res.send(JSON.stringify(authors))
})

router.post('/delete_author', async function (req, res) {
  var name = req.body.userName
  var secName = req.body.secName
  var email = req.body.email
  var phone = req.body.phone
  await Author.destroy({
    where: {
      Name: name,
      SecName: secName,
      Email: email,
      Phone: phone
    }
  })
  res.send({'status':'eeeee!'})
})

module.exports = router
