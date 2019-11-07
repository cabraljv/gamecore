const Sequelize = require('sequelize')
const Project = require('./Project')
const User = require('./User')
const sequelize = new Sequelize('dbgamecore', 'postgres', 'toor', {
  dialect: 'postgres',
  host: 'localhost'
})

const Comentario = sequelize.define('comments', {

  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  project_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id'
    }
  },


}, {
  timestamps: true
});

module.exports = Comentario;