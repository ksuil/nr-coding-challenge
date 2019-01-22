const Sequelize = require('sequelize');

const modelRepo = require('../models');

const sequelize = new Sequelize('test', 'root', 'password', {
  host: 'mysql',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

const models = modelRepo(sequelize);
module.exports = models;