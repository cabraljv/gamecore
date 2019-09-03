const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Token = sequelize.define('token', {

  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
    timestamps: true
  });

module.exports = Token;