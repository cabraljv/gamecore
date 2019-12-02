const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'postgres', 'toor', {
  dialect: 'postgres',
  host: 'localhost'
})

const User = sequelize.define('followers', {

  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  project_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
  timestamps: true
});

module.exports = User;