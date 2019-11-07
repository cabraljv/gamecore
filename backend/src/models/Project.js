const Sequelize = require('sequelize')
const User = require('./User')
const sequelize = new Sequelize('dbgamecore', 'postgres', 'toor', {
  dialect: 'postgres',
  host: 'localhost'
})

const Projects = sequelize.define('projects', {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cover_img: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },


}, {
  timestamps: true
});

module.exports = Projects;