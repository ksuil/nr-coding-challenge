const Sequelize = require('sequelize');

const dbConfig = require('./config');
const modelRepo = require('../models');

const config = dbConfig.development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
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