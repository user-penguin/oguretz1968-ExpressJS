const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Article = sequelize.define('Article', {
    Title: {
        type: Sequelize.STRING(500),
    },
    Text1: {
        type: Sequelize.STRING(5000),
    },
    Text2: {
        type: Sequelize.STRING(5000),
    },
});

module.exports = Article;