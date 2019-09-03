const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Comentario = sequelize.define('comentarios', {

  conteudo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_post: {
    type: Sequelize.INTEGER,
    allowNull: false
  },


}, {
    timestamps: true
  });

module.exports = Comentario;