
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')
const Comment = require('../models/Comment')
const User = require('../models/User')

module.exports = {
  async show(req, res) {
    const { id } = req.params;
    const projectFind = await Project.findByPk(parseInt(id));
    const comments = await Comment.findAll({
      order: [
        ['id', 'DESC'],
      ],
      where: { project_id: id },
    })
    var commentsFinal = []
    for (let i = 0; i < comments.length; i++) {
      let userComent = await User.findByPk(
        parseInt(comments[i].user_id),
        { attributes: ['id', 'profile_pic', 'username', 'score'], })
      commentsFinal.push({
        content: comments[i].content,
        createdAt: comments[i].createdAt,
        updatedAt: comments[i].updatedAt,
        user_pic: userComent.profile_pic,
        user_score: userComent.score,
        username: userComent.username
      })
    }
    comments.map(async item => {

    })
    res.json({
      cod: 200,
      response: {
        project: projectFind,
        comments: commentsFinal
      }
    })
  },
  async index(req, res) {
    const projectsFinded = await Project.findAll({
      attributes: ['id', 'logo', 'title'],
      limit: 20,
    })
    res.json({
      cod: 200,
      response: projectsFinded,
    })
  },
  async store(req, res) {
    const { title, description, content, type } = req.body
    const { cover_img, logo } = req.files

    try {
      const user = await jwt.verify(req.token, 'g4m3c0r32oi9');
      await Project.create({ title, description, content, type, cover_img: cover_img[0].path, logo: logo[0].path, user_id: user.id })
      const projectRecived = await Project.findAll({ where: { title, description, type, cover_img: cover_img[0].path } })

      res.json({ cod: 201, response: projectRecived[0] })
    } catch (err) {
      res.json({ cod: 401, response: err.message })
    }

  },

}