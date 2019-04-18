const Article = require('../models/Article')
const Author = require('../models/Author')
const Order = require('../models/Order')
const Photo = require('../models/Photo')

Article.belongsTo(Photo, { as: 'FirstPhoto', onDelete: 'restrict', onUpdate: 'restrict' })
Article.belongsTo(Photo, { as: 'SecondPhoto', onDelete: 'restrict', onUpdate: 'restrict' })
Author.belongsTo(Photo, { as: 'MainPhoto', onDelete: 'restrict', onUpdate: 'restrict' })

Author.hasMany(Article, { foreignKey: 'AuthorId', sourceKey: 'id', onDelete: 'restrict', onUpdate: 'restrict' })
Article.belongsTo(Author, { foreignKey: 'AuthorId', targetKey: 'id', onDelete: 'restrict', onUpdate: 'restrict' })

async function init () {
  await Photo.sync()
  await Author.sync()
  await Article.sync()
  await Order.sync()
}

(async function f () {
  await init()
})()
