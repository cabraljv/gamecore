const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Project = require('../models/Project')
module.exports = {
  async store(req, res) {
    const { content, project_id } = req.body
    try {
      const userid = await jwt.verify(req.token, 'g4m3c0r32oi9');
      await Comment.create({ content, user_id: userid.id, project_id })
      const user_coment = await User.findByPk(userid.id);
      var score = parseInt(user_coment.score) + 10;
      await User.update({ score }, { where: { id: userid.id } })
      res.json({ cod: 201, response: "Comment created" })
    } catch (err) {
      res.json({ cod: 401, response: err.message })
    }

  }
}