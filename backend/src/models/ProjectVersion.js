const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'postgres', 'toor', {
  dialect: 'postgres',
  host: 'localhost'
})

const User = sequelize.define('projectVersions', {

  version: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_project: {
    type: Sequelize.STRING,
    allowNull: false
  }

}, {
  timestamps: true
});

module.exports = User;