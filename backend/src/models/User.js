const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('usuarios', {

  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  especialidade: {
    type: Sequelize.STRING,
  },
  pontuacao: {
    type: Sequelize.STRING,
  },
  cargo: {
    type: Sequelize.STRING,
  },
  id_fotoperfil: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

}, {
    // options
  });

module.exports = User;