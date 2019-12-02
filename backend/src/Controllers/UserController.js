const md5 = require('md5')
const Usuario = require('../models/User')
const jwt = require('jsonwebtoken')
module.exports = {
  async store(req, res) {
    const { username, passwd, name, email, specialty } = req.body

    await Usuario.create({ username, passwd: md5(passwd), name, email, profile_pic: req.file.path, score: 0, specialty })
    res.json({ cod: 201, response: "User created" })
  },



  async show(req, res) {
    const { passwd, email } = req.body

    const user = await Usuario.findAll({
      where: {
        email,
        passwd: md5(passwd)
      }
    });
    if (user[0] === undefined) {
      res.json({ cod: 401, response: "Invalid credentials" })
    } else {

      const token = await jwt.sign(user[0].dataValues, 'g4m3c0r32oi9', { expiresIn: '48h' });
      res.json({ cod: 200, response: token })
    }


  },


}
