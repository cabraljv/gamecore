const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Post = sequelize.define('projetos', {

  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipodojogo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_capa: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },


}, {
    timestamps: true
  });

module.exports = Post;