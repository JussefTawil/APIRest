const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect
  }
);

const User = require('./user.model')(sequelize);
const Product = require('./product.model')(sequelize);

module.exports = { sequelize, User, Product }; 