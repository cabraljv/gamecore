const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Imagem = sequelize.define('imagens', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false
  },

}, {
    timestamps: true
  });

module.exports = Imagem;