const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'postgres', 'toor', {
  dialect: 'postgres',
  host: 'localhost'
})

const User = sequelize.define('users', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  passwd: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  specialty: {
    type: Sequelize.STRING,
  },
  score: {
    type: Sequelize.INTEGER,
  },
  profile_pic: {
    type: Sequelize.STRING,

  },

}, {
  timestamps: false
});

module.exports = User;