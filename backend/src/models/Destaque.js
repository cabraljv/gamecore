const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Destaque = sequelize.define('destaques', {

  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_capa: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {         // User hasMany WorkingDays n:n
      model: 'imagens',
      key: 'id'
    }
  },
  id_img: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         // User hasMany WorkingDays n:n
      model: 'imagens',
      key: 'id'
    }
  },


}, {
    timestamps: true
  });

module.exports = Destaque;