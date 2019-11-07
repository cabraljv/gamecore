
const Project = require('../models/Project')
const jwt = require('jsonwebtoken')

module.exports = {
  async store(req, res) {
    const { title, description, content, type } = req.body
    try{
      const user = await jwt.verify(req.token, 'g4m3c0r32oi9');
      await Project.create({ title, description, content, type, cover_img: req.file.path, user_id: user.id })
      res.json({cod: 201, response:"Project created"})
    }catch(err){
      res.json({cod: 401, response:err.message})
    }

  },
  async index(req, res) {
    
  }
}