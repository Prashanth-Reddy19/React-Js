const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User= sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  username: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  mobile: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = User;
