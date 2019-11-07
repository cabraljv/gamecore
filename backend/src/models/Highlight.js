const Sequelize = require('sequelize')

const sequelize = new Sequelize('dbgamecore', 'postgres', 'toor', {
  dialect: 'postgres',
  host: 'localhost'
})

const Highlight = sequelize.define('highlights', {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cover_img: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  project_img: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },


}, {
  timestamps: true
});

module.exports = Highlight;