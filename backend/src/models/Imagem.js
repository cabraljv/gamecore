const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Imagem = sequelize.define('usuarios', {

  path: {
    type: Sequelize.STRING,
    allowNull: false
  },

}, {
    // options
  });

module.exports = Imagem;