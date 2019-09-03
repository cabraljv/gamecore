const md5 = require('md5')
const crypto = require('crypto')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const Imagem = require('../models/Imagem')
const Usuario = require('../models/User')
const Token = require('../models/Token')

module.exports = {
  async insert(req, res) {
    const { user, pwd, nome, email } = req.body
    var fileName = `${crypto.randomBytes(12).toString('hex')}.jpg`;
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName));

    fs.unlinkSync(req.file.path);
    const img = await Imagem.create({ path: fileName })
    await Usuario.create({ username: user, senha: md5(pwd), nome, email, id_fotoperfil: img.dataValues.id })



    res.json({ cod: 201, resultado: 'Usuário cadastrado com sucesso' })
  },
  async index(req, res) {
    const { email, pwd } = req.query

    const user = await Usuario.findOne({ where: { email, senha: md5(pwd) } })
    if (user !== null) {
      const token = crypto.randomBytes(24).toString('hex')
      await Token.create({ token, id_user: user.dataValues.id })
      console.log('Login realizado')
      res.json({ cod: 200, resultado: token })
    } else {
      console.log('Login não autorizado')
      res.json({ cod: 401, resultado: 'Login não autorizado' })
    }

  }
}