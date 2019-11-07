const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken')


module.exports = {
  async store(req, res) {
    const { content, project_id } = req.body
    try {
      const user = await jwt.verify(req.token, 'g4m3c0r32oi9');
      await Project.create({ content, user_id: user.id, project_id })
      res.json({ cod: 201, response: "Comment created" })
    } catch (err) {
      res.json({ cod: 401, response: err.message })
    }

  }
}